/* Application User Creation */
CREATE USER 'wiki'@'%' IDENTIFIED BY 'admin123456';
GRANT ALL PRIVILEGES ON wikidb.* TO 'wiki'@'%';
FLUSH PRIVILEGES;