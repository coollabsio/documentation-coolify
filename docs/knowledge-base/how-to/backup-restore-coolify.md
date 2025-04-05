---
title: Backup and Restore Coolify
---


# Backup and Restore Your Coolify Instance

This guide will show you how to back up your Coolify instance and restore it on a new server. 

There are two methods to create backups:
- **S3 Backup:** Use S3-compatible storage to automatically save backups.
- **Manual Backup:** Trigger a backup manually from the Coolify dashboard.

If you use S3-compatible storage, simply download the backup file from your S3 provider and transfer it to your new server. 

The rest of this guide will focus on the manual backup method, which is ideal for most users.


## 1. Create a Manual Backup
1. **Go to Backup Page on Dashboard:**  
   In your Coolify dashboard, click on **Settings** and select the **Backup** tab to view your database and backup settings.
   <ZoomableImage src="/docs/images/knowledge-base/how-tos/backup-restore-coolify/1.webp" />

2. **Trigger a Backup:**  
   Click on the **Backup Now** button. This will start the backup process in the background.
   <ZoomableImage src="/docs/images/knowledge-base/how-tos/backup-restore-coolify/2.webp" />

3. **Download or Copy Backup Location:**  
   Once the backup is complete, you will see a **Download** button and a location path in the UI.  
   <ZoomableImage src="/docs/images/knowledge-base/how-tos/backup-restore-coolify/3.webp" />
   - **Download:** Saves the backup file to your local computer.
   - **Copy Path:** You can use this path with a tool like SCP to transfer the backup file directly to your new server.

::: info **Note:** 
If you are using S3-compatible storage for backups, download the backup file from your S3 provider instead
:::


## 2. Retrieve Your `APP_KEY`
Before you restore the backup, you need to obtain the `APP_KEY` from your current Coolify instance. This key is used to decrypt your data during restoration.

1. **Open the Terminal in Coolify:**  
   Access the **Terminal** tab in the dashboard and connect to `localhost`.

2. **Navigate to the Data Directory:**  
   ```sh
   cd /data/coolify/source
   ```

3. **View the Environment File:**  
   Run the following command to display the contents of the `.env` file:
   ```sh
   cat .env
   ```
   Copy the value of `APP_KEY` and save it securely. This key is important for the restoration process.

::: danger IMPORTANT** 
Save this `APP_KEY` safely. Without it, you cannot restore your backup.
:::


## 3. Prepare Your New Server
Set up your new server where you will restore your Coolify instance.

1. **Install a Fresh Coolify Instance:**  
   Follow the [installation instructions](/get-started/installation) for Coolify on your new server. This could be on a VPS, WSL, or any other environment.

2. **Verify the Installation:**  
   Access your new Coolify instance on your browser. A fresh installation will show the registration page, indicating that no data exists yet.


## 4. Transfer and Restore the Backup
1. **Transfer the Backup File:**  
   Copy the backup file you created to the new server. You can do this via SCP, FTP, or any other secure file transfer method.

2. **Run the Restore Command:**  
   Use the PostgreSQL restore tool to import your backup into the database container.
   ```sh
   docker exec -it coolify-db pg_restore --verbose --clean --no-acl --no-owner -U coolify -d coolify < /path/to/your_backup_file
   ```
   You have to replace `/path/to/your_backup_file` with the path of your backup file on the server.

   ::: warning Note:
   Some warnings about existing foreign keys or sequences might appear; these can usually be ignored if the base structure remains intact.
   :::


## 5. Update Environment Settings for Restoration
After restoring the backup, update your environment configuration to allow the new instance to use the old data.

1. **Access the Data Directory:**  
   Navigate to the directory where your environment files are stored:
   ```sh
   cd /data/coolify/source
   ```

2. **Edit the Environment File:**  
   Open the `.env` file with your preferred text editor:
   ```sh
   nano .env
   ```

3. **Add the Previous APP Key:**  
   Add a new environment variable called `APP_PREVIOUS_KEYS` and paste the `APP_KEY` you saved earlier:
   ```env
   APP_PREVIOUS_KEYS=your_previous_app_key_here
   ```
   Save and exit the editor.


## 6. Restart Coolify
To apply the restored backup and updated environment settings, restart your Coolify instance using the install script.

1. **Run the Installation Script:**  
   Re-run the Coolify installation command:
   ```sh
   curl -fsSL https://cdn.coollabs.io/coolify/install.sh | sudo bash
   ```

2. **Verify the Restoration:**  
   Visit your Coolify dashboard URL and log in with the same credentials from your previous instance. Your projects, deployments, and settings should now be restored.


## Troubleshooting
- **500 Error on Login or Project Access:**  
  Double-check that the `APP_PREVIOUS_KEYS` variable is correctly set in your `.env` file.

- **Permission Denied Errors:**  
  If you encounter permission issues while accessing directories, change the ownership of the `/data/coolify` directory. Since Coolify uses the root user account, ensure that the ownership is set to **root**:
  ```sh
  sudo chown -R root:root /data/coolify
  ```