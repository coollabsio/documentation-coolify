---
title: "AWS S3"
description: "Here you can find the documentation for configuring AWS S3 bucket in Coolify."
---

# AWS S3

## TLDR

1. Create a bucket in AWS Console
2. Create a custom policy in AWS Console with the following permissions:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:GetObjectAcl",
        "s3:PutObjectAcl",
        "s3:PutObject"
      ],
      "Resource": [
        // rewrite your-bucket-name with your bucket name
        "arn:aws:s3:::your-bucket-name",
        "arn:aws:s3:::your-bucket-name/*"
      ]
    }
  ]
}
```

3. Create an IAM user in AWS Console & attach the policy from the previous step.
4. Go to User settings & create an `Access Key` in AWS Console.
5. Add the `Access Key` and `Secret Key` in Coolify when you create a new S3 source.
   ::: success Tip
     You need to use the S3 HTTP endpoint without the bucket name, for example,`https://s3.eu-central-1.amazonaws.com`.
   :::

# Detailed steps

### Create a bucket


1. Create a bucket in AWS Console
    Go to [AWS Console](https://us-east-1.console.aws.amazon.com/s3/buckets) and create a new bucket. 
    <ZoomableImage src="/docs/images/aws-s3/1-bucket.webp" />

2. Name your bucket.
  <ZoomableImage src="/docs/images/aws-s3/2-bucket.webp" />


### Create a new policy


1. Create a new policy.
    Go to [AWS Console](https://us-east-1.console.aws.amazon.com/iam/home) and create a new policy.
     <ZoomableImage src="/docs/images/aws-s3/1-policy.webp" />

2. Name & configure your policy.
    Add the following JSON permissions to your policy (replace `your-bucket-name` with your bucket name):
    ```json
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "s3:ListBucket",
            "s3:GetObject",
            "s3:DeleteObject",
            "s3:GetObjectAcl",
            "s3:PutObjectAcl",
            "s3:PutObject"
          ],
          "Resource": [
            "arn:aws:s3:::your-bucket-name",
            "arn:aws:s3:::your-bucket-name/*"
          ]
        }
      ]
    }
    ```
    <ZoomableImage src="/docs/images/aws-s3/2-policy.webp" />

    <br />

    <ZoomableImage src="/docs/images/aws-s3/3-policy.webp" />


### Create a new IAM user

1. Create a new IAM User.
    Go to [AWS Console](https://us-east-1.console.aws.amazon.com/iam/home) and create a new user.

    <ZoomableImage src="/docs/images/aws-s3/1-iam.webp" />

2. Name your user.

     <ZoomableImage src="/docs/images/aws-s3/2-iam.webp" />

3. Attach the policy created in the previous step.

     <ZoomableImage src="/docs/images/aws-s3/3-iam.webp" />

4. Go to your user settings.

     <ZoomableImage src="/docs/images/aws-s3/4-iam.webp" />

5. Create a new `Access Key`.

     <ZoomableImage src="/docs/images/aws-s3/5-iam.webp" />

6. Set `Other` as use-case.

     <ZoomableImage src="/docs/images/aws-s3/6-iam.webp" />

7. Copy the `Access Key` & `Secret Access Key`.
    You will need it to configure this S3 storage in Coolify.

     <ZoomableImage src="/docs/images/aws-s3/7-iam.webp" />


### Configure S3 in Coolify


1. Add new S3 Storage.
    Go to your Coolify instance and create a new S3 storage.

     <ZoomableImage src="/docs/images/aws-s3/1-coolify.webp" />

2. Add the details.
    Make sure you use the S3 HTTP endpoint without the bucket name. For example,`https://s3.eu-central-1.amazonaws.com`. 
    
    <ZoomableImage src="/docs/images/aws-s3/2-coolify.webp" />


Well done!