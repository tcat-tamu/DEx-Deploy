Dramatic Extracts (DEx) Deployment Repository 
=============================================
This Git Repo contains the assets required to configure and deploy the Dramatic Extracts 
project (http://dexweb.itercommunity.org). The Dramatic Extracts 
[web-application](https://github.com/tcat-tamu/DEx-Web) is powered by JavaScript  and 
communicates with a [Java application](https://github.com/tcat-tamu/DEx) via a REST API 
running on the server for data-persistence and searching. It uses 
[Solr 5.5](http://lucene.apache.org/solr/) internally to manage the search and browsing 
features and a [PostgreSQL 9.5 database](https://www.postgresql.org/) for its data storage. 

These technologies can be maintained, configured and deployed individually. Indeed, different
IT preferences and policies may require different choices than we have made in setting up
this deployment repository. But there are quite few components that need to be installed, 
configured, and started. This repository contains a number of scripts and resources to help 
make the deployment process easier for one common configuration - deployment on a standalone
VM running Ubuntu 14.04.     

Prerequisites
=============
This deployment process is designed to have minimal prerequisites. It assumes that you have
access to a server (virtual machine) with a freshly installed copy of 
[Ubuntu 14.0.4](http://www.ubuntu.com/), and that you have SUDO privileges. This will 
likely work with newer versions of Ubuntu, but has only been tested with 14.04. 

The deployment process relies on [Ansible](https://www.ansible.com/) to automate the prerequisites needed and to 
build and configure [Docker](https://www.docker.com/) containers that will run the application.
You should be able to follow the installation procedure below with a basic familiarity with
Linux administration, but understanding Ansible and Docker may be helpful for maintenance 
and troubleshooting.

To run this DEx over SSL (strongly recommended) you will need to have an SSL certificate,
SSL key and intermediate cert available when you start this process.

Installation Procedure
==========================

These commands need to be executed with root privileges. To avoid typing `sudo` before 
every command, start off by opening a new shell as root. 
 
```
sudo su -
```

The first step is to install git and Ansible to bootstrap this process. The Ansible 
deployment playbook will take care of installing most of what you need (things like 
Solr, PostgresSQL, Tomcat, Java, etc) so this is all that you will need to install 
manually.  



``` 
aptitude install git
aptitude install software-properties-common
apt-add-repository ppa:ansible/ansible
aptitude update
aptitude install ansible
```

Next, you will need to create the main project directory and clone the contents of 
this repository. Once that's in place, navigate into the base directory for the Ansible
deployment playbooks.
 
```
mkdir -p /dex
cd /dex
git clone https://github.com/tcat-tamu/DEx-Deploy .
cd releng/ansible
```

Now you will need to edit two files. `setup_dex.yml` is the main installation script, known
as the Ansible playbook. It is fairly long (and worth studying if you'd like to know how 
the installation process works in detail). All that is needed, however is to edit a few of 
the variable definitions at the top of the script file. These are clearly documented in the 
file. Pay specific attention to the following:  

 * `pg_password` Password for the PostgreSQL user. The Ansible playbook will download and 
   configure PostgreSQL, so you are free to pick any password you like. You will configure 
   the DEx application to use this password shortly.
 * `local_subnet` The IP address for your local subnet. This is used to restrict access to 
   PostgreSQL and other firewall setting to allow access only to the inbound connections coming
   from the supplied subnet. This will be useful for debugging, backup and management tasks.
 * `host_name` and `dns_suffix` The hostname (e.g. dexweb) and DNS suffix (itercommunity.org). 
   This will be used to configure Apache for web-hosting and routing purposes.
 * `ssl_intermediate`, `ssl_cert`, and `ssl_key` The filenames for SSL intermediate cert, 
   certificate and key to enable HTTPS based access. These files should be located in 
   ansible releng directory.
 * `solr_public` A flag to enable access to Solr from through the firewall. This is `false`
   by default for security reasons. It may be helpful to support debugging but is unsecure. 
   DEx has been designed with the assumption that the Solr API will be behind a firewall 
   and accessed only from trusted resources.
 * 'ssl_enabled` A flag to enable or disable the use of SSL connections. This is enabled 
   by default but may be disabled if SSL certificates are not available (not recommended).


Once the Ansible playbook has been updated, there are a couple of application configuration
parameters that need to be updated. These are found in `/dex/dex_war/dex.config.properties`.
There are two main properties that need to be edited in this file. 

 * `edu.tamu.tcat.trc.repo.postgresql.password` This should reflect the password configured 
   in the Ansible playbook.
 * `solr.api.endpoint` This should be updated to the fully qualified domain name of the 
   server (the same values supplied for `host_name` and `dns_duffix` above with a path 
   of `/solr/` (note that the trailing slash is required). Solr will be run from within 
   its own Docker container, and the Ansible playbook will configure Apache to route 
   requests to this URL appropriately (although, note that only requests originating from
   this server will be allowed unless `solr_public` has been set to `true`.
   
The other configuration properties should work as configured. Note that these paths are 
defined relative to the Docker container that runs the DEx war application. Within this 
container the main `/dex` directory is mapped as `/war-deployment`. 

Finally, now that the application has been configured, the final step is to run the Ansible
playbook. This will take some time as Ansible downloads the various dependencies and builds
the Docker containers. Please note that the steps that build the Docker containers can take 
up to 15 minutes to complete, depending on the server being used, and give no visual indication
of progress. Also, do not worry if you see any errors during the playbook execution, as long
as they don't stop playback. Once this has completed, the DEx application will be up and running.

```
ansible-playbook setup_dex.yml -c local
```


Building from Source
====================
The application source 
 
Updating DEx
============

Docker Crash Course
===================