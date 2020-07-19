#/bin/sh

cd ./scripts
if [ -f .env ]; then
    export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
    curl --request GET https://api.telegram.org/bot$TELEGRAM_TOKEN/setWebhook?url=$EVENT_MANAGER_URL

    echo ""
    echo "Request was finished"
fi
