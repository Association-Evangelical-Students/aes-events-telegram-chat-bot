#/bin/sh

deploy()
{
  AWS_CREDENTIALS_FILE=~/.aws/credentials
  AWS_PROFILE=serverless-admin
  REGION=us-east-1

  if [ ! -f "$AWS_CREDENTIALS_FILE" ]; then
    echo -e "Application default credentials ($AWS_CREDENTIALS_FILE) don't exist, please finish the flow.\n"
    serverless config credentials --provider aws --key $AWS_ACCESS_KEY --secret $AWS_SECRET --profile $AWS_PROFILE
  fi

  rm -rf dist
  yarn build

  serverless deploy
}

deploy
