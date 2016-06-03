Requirements. Must have a .war, and SSL certificates.

Basic steps to install DEx
==========================

* sudo aptitude install git
* sudo aptitude install software-properties-common
* sudo apt-add-repository ppa:ansible/ansible
* sudo aptitude update
* sudo aptitude install ansible
* sudo mkdir /dex
* cd /dex
* sudo git clone https://github.com/tcat-tamu/DEx-Deploy .
* cd releng
* cd ansible
* Edit variables in setup_dex.yml as needed
  * Update the password for the PostgreSQL user
  * Update the IP address for the local subnet. This restricts access to PostgreSQL and other 
    firewall settings to allow access only to the inbound connections coming from the supplied
    subnet. 
  * Update the hostname (e.g., dexweb) and dns_suffix (e.g., itercommunity.org). This will be 
    used to configure Apache for web-hosting and routing purposes.
  * Configure SSL certificate
* Also edit config in /dex/dex_war/dex.config.properties - especially URL and postgresql connection information
* Copy dex.war to this folder
* Copy SSL certificate, key and intermediate cert to this directory
* sudo su (run the following as root)
* ansible-playbook setup_dex.yml -c local

Removing Existing Docker Containers
===================================
* sudo docker ps