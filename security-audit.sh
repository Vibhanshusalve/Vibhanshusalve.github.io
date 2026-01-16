#!/bin/bash

# ================================================
# PORTFOLIO SECURITY ASSESSMENT TOOL
# ================================================

echo "=========================================="
echo "  PORTFOLIO SECURITY ASSESSMENT"
echo "  Target: https://vibhanshusalve.github.io/"
echo "=========================================="
echo ""

URL="https://vibhanshusalve.github.io/"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test 1: Security Headers
echo "1. SECURITY HEADERS CHECK"
echo "-------------------------------------------"

HEADERS=$(curl -s -I "$URL")

check_header() {
    local header_name=$1
    local header_value=$2
    
    if echo "$HEADERS" | grep -i "$header_name" > /dev/null; then
        echo -e "${GREEN}✓${NC} $header_name: PRESENT"
        echo "$HEADERS" | grep -i "$header_name"
    else
        echo -e "${RED}✗${NC} $header_name: MISSING"
    fi
}

check_header "Strict-Transport-Security"
check_header "X-Frame-Options"
check_header "X-Content-Type-Options"
check_header "Content-Security-Policy"
check_header "X-XSS-Protection"
check_header "Referrer-Policy"
check_header "Permissions-Policy"

echo ""
echo "2. HTTPS ENFORCEMENT"
echo "-------------------------------------------"
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "http://vibhanshusalve.github.io/")
if [ "$HTTP_STATUS" -eq 301 ] || [ "$HTTP_STATUS" -eq 302 ]; then
    echo -e "${GREEN}✓${NC} HTTP redirects to HTTPS"
else
    echo -e "${YELLOW}⚠${NC} HTTP status: $HTTP_STATUS"
fi

echo ""
echo "3. EXTERNAL LINKS SECURITY"
echo "-------------------------------------------"
curl -s "$URL" | grep -o 'href="http[^"]*"' | while read link; do
    if echo "$link" | grep -q 'rel="noopener noreferrer"'; then
        echo -e "${GREEN}✓${NC} Safe external link"
    else
        echo -e "${YELLOW}⚠${NC} Check: $link"
    fi
done

echo ""
echo "4. CONTENT ANALYSIS"
echo "-------------------------------------------"

# Check for inline scripts
INLINE_SCRIPTS=$(curl -s "$URL" | grep -c "<script>" || echo "0")
echo "Inline scripts found: $INLINE_SCRIPTS"

# Check for inline styles
INLINE_STYLES=$(curl -s "$URL" | grep -c "style=" || echo "0")
echo "Inline styles found: $INLINE_STYLES"

# Check for external resources
echo ""
echo "External resources loaded:"
curl -s "$URL" | grep -oE '(src|href)="[^"]*"' | grep -v "^#" | sort -u

echo ""
echo "5. INFORMATION DISCLOSURE"
echo "-------------------------------------------"

# Check for comments
COMMENTS=$(curl -s "$URL" | grep -c "<!--" || echo "0")
echo "HTML comments: $COMMENTS"

# Check for .git exposure
GIT_CHECK=$(curl -s -o /dev/null -w "%{http_code}" "$URL/.git/")
if [ "$GIT_CHECK" -eq 404 ]; then
    echo -e "${GREEN}✓${NC} .git directory not exposed"
else
    echo -e "${RED}✗${NC} .git directory might be exposed ($GIT_CHECK)"
fi

echo ""
echo "=========================================="
echo "  SECURITY ASSESSMENT COMPLETE"
echo "=========================================="
