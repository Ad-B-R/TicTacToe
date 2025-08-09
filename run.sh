FILE="index.html"

if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    xdg-open "$FILE"
elif [[ "$OSTYPE" == "darwin"* ]]; then
    open "$FILE"
else
    echo "Unsupported OS: $OSTYPE"
    exit 1
fi