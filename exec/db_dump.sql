-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: epari
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accounts_user`
--

DROP TABLE IF EXISTS `accounts_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accounts_user` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(50) NOT NULL,
  `userEmail` varchar(255) NOT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts_user`
--

LOCK TABLES `accounts_user` WRITE;
/*!40000 ALTER TABLE `accounts_user` DISABLE KEYS */;
INSERT INTO `accounts_user` VALUES (1,'leehyunjin','111hyunjin@aaa.aaa'),(2,'kyong0409','aaa@aaa.aaa'),(3,'kyong0409','kyong0409@gmail.com');
/*!40000 ALTER TABLE `accounts_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add user',1,'add_user'),(2,'Can change user',1,'change_user'),(3,'Can delete user',1,'delete_user'),(4,'Can view user',1,'view_user'),(5,'Can add plant',2,'add_plant'),(6,'Can change plant',2,'change_plant'),(7,'Can delete plant',2,'delete_plant'),(8,'Can view plant',2,'view_plant'),(9,'Can add collect',3,'add_collect'),(10,'Can change collect',3,'change_collect'),(11,'Can delete collect',3,'delete_collect'),(12,'Can view collect',3,'view_collect'),(13,'Can add title',4,'add_title'),(14,'Can change title',4,'change_title'),(15,'Can delete title',4,'delete_title'),(16,'Can view title',4,'view_title'),(17,'Can add obtained',5,'add_obtained'),(18,'Can change obtained',5,'change_obtained'),(19,'Can delete obtained',5,'delete_obtained'),(20,'Can view obtained',5,'view_obtained'),(21,'Can add location',6,'add_location'),(22,'Can change location',6,'change_location'),(23,'Can delete location',6,'delete_location'),(24,'Can view location',6,'view_location'),(25,'Can add log entry',7,'add_logentry'),(26,'Can change log entry',7,'change_logentry'),(27,'Can delete log entry',7,'delete_logentry'),(28,'Can view log entry',7,'view_logentry'),(29,'Can add permission',8,'add_permission'),(30,'Can change permission',8,'change_permission'),(31,'Can delete permission',8,'delete_permission'),(32,'Can view permission',8,'view_permission'),(33,'Can add group',9,'add_group'),(34,'Can change group',9,'change_group'),(35,'Can delete group',9,'delete_group'),(36,'Can view group',9,'view_group'),(37,'Can add user',10,'add_user'),(38,'Can change user',10,'change_user'),(39,'Can delete user',10,'delete_user'),(40,'Can view user',10,'view_user'),(41,'Can add content type',11,'add_contenttype'),(42,'Can change content type',11,'change_contenttype'),(43,'Can delete content type',11,'delete_contenttype'),(44,'Can view content type',11,'view_contenttype'),(45,'Can add session',12,'add_session'),(46,'Can change session',12,'change_session'),(47,'Can delete session',12,'delete_session'),(48,'Can view session',12,'view_session');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'accounts','user'),(7,'admin','logentry'),(9,'auth','group'),(8,'auth','permission'),(10,'auth','user'),(11,'contenttypes','contenttype'),(6,'locations','location'),(3,'plantbook','collect'),(2,'plantbook','plant'),(12,'sessions','session'),(5,'titles','obtained'),(4,'titles','title');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'accounts','0001_initial','2022-09-30 09:57:30.355818'),(2,'contenttypes','0001_initial','2022-09-30 09:57:30.401697'),(3,'auth','0001_initial','2022-09-30 09:57:30.794494'),(4,'admin','0001_initial','2022-09-30 09:57:30.947274'),(5,'admin','0002_logentry_remove_auto_add','2022-09-30 09:57:30.956251'),(6,'admin','0003_logentry_add_action_flag_choices','2022-09-30 09:57:30.966272'),(7,'contenttypes','0002_remove_content_type_name','2022-09-30 09:57:31.028197'),(8,'auth','0002_alter_permission_name_max_length','2022-09-30 09:57:31.070060'),(9,'auth','0003_alter_user_email_max_length','2022-09-30 09:57:31.092999'),(10,'auth','0004_alter_user_username_opts','2022-09-30 09:57:31.100978'),(11,'auth','0005_alter_user_last_login_null','2022-09-30 09:57:31.141869'),(12,'auth','0006_require_contenttypes_0002','2022-09-30 09:57:31.144860'),(13,'auth','0007_alter_validators_add_error_messages','2022-09-30 09:57:31.153836'),(14,'auth','0008_alter_user_username_max_length','2022-09-30 09:57:31.210684'),(15,'auth','0009_alter_user_last_name_max_length','2022-09-30 09:57:31.286424'),(16,'auth','0010_alter_group_name_max_length','2022-09-30 09:57:31.305375'),(17,'auth','0011_update_proxy_permissions','2022-09-30 09:57:31.315379'),(18,'auth','0012_alter_user_first_name_max_length','2022-09-30 09:57:31.360733'),(19,'locations','0001_initial','2022-09-30 09:57:31.385666'),(20,'plantbook','0001_initial','2022-09-30 09:57:31.554146'),(21,'sessions','0001_initial','2022-09-30 09:57:31.593361'),(22,'titles','0001_initial','2022-09-30 09:57:31.702701');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locations_location`
--

DROP TABLE IF EXISTS `locations_location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locations_location` (
  `locationId` int NOT NULL AUTO_INCREMENT,
  `areaId` int NOT NULL,
  `areaName` varchar(50) NOT NULL,
  `sigunguId` int NOT NULL,
  `sigunguName` varchar(50) NOT NULL,
  PRIMARY KEY (`locationId`)
) ENGINE=InnoDB AUTO_INCREMENT=234 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations_location`
--

LOCK TABLES `locations_location` WRITE;
/*!40000 ALTER TABLE `locations_location` DISABLE KEYS */;
INSERT INTO `locations_location` VALUES (1,1,'서울시',1,'강남구'),(2,1,'서울시',2,'강동구'),(3,1,'서울시',3,'강북구'),(4,1,'서울시',4,'강서구'),(5,1,'서울시',5,'관악구'),(6,1,'서울시',6,'광진구'),(7,1,'서울시',7,'구로구'),(8,1,'서울시',8,'금천구'),(9,1,'서울시',9,'노원구'),(10,1,'서울시',10,'도봉구'),(11,1,'서울시',11,'동대문구'),(12,1,'서울시',12,'동작구'),(13,1,'서울시',13,'마포구'),(14,1,'서울시',14,'서대문구'),(15,1,'서울시',15,'서초구'),(16,1,'서울시',16,'성동구'),(17,1,'서울시',17,'성북구'),(18,1,'서울시',18,'송파구'),(19,1,'서울시',19,'양천구'),(20,1,'서울시',20,'영등포구'),(21,1,'서울시',21,'용산구'),(22,1,'서울시',22,'은평구'),(23,1,'서울시',23,'종로구'),(24,1,'서울시',24,'중구'),(25,1,'서울시',25,'중랑구'),(26,2,'인천시',1,'강화군'),(27,2,'인천시',2,'계양구'),(28,2,'인천시',3,'미추홀구'),(29,2,'인천시',4,'남동구'),(30,2,'인천시',5,'동구'),(31,2,'인천시',6,'부평구'),(32,2,'인천시',7,'서구'),(33,2,'인천시',8,'연수구'),(34,2,'인천시',9,'옹진군'),(35,2,'인천시',10,'중구'),(36,3,'대전시',1,'대덕구'),(37,3,'대전시',2,'동구'),(38,3,'대전시',3,'서구'),(39,3,'대전시',4,'유성구'),(40,3,'대전시',5,'중구'),(41,4,'대구시',1,'남구'),(42,4,'대구시',2,'달서구'),(43,4,'대구시',3,'달성군'),(44,4,'대구시',4,'동구'),(45,4,'대구시',5,'북구'),(46,4,'대구시',6,'서구'),(47,4,'대구시',7,'수성구'),(48,4,'대구시',8,'중구'),(49,5,'광주시',1,'광산구'),(50,5,'광주시',2,'남구'),(51,5,'광주시',3,'동구'),(52,5,'광주시',4,'북구'),(53,5,'광주시',5,'서구'),(54,6,'부산시',1,'강서구'),(55,6,'부산시',2,'금정구'),(56,6,'부산시',3,'기장군'),(57,6,'부산시',4,'남구'),(58,6,'부산시',5,'동구'),(59,6,'부산시',6,'동래구'),(60,6,'부산시',7,'부산진구'),(61,6,'부산시',8,'북구'),(62,6,'부산시',9,'사상구'),(63,6,'부산시',10,'사하구'),(64,6,'부산시',11,'서구'),(65,6,'부산시',12,'수영구'),(66,6,'부산시',13,'연제구'),(67,6,'부산시',14,'영도구'),(68,6,'부산시',15,'중구'),(69,6,'부산시',16,'해운대구'),(70,7,'울산시',1,'중구'),(71,7,'울산시',2,'남구'),(72,7,'울산시',3,'동구'),(73,7,'울산시',4,'북구'),(74,7,'울산시',5,'울주군'),(75,8,'세종시',1,'세종특별자치시'),(76,31,'경기도',1,'가평군'),(77,31,'경기도',2,'고양시'),(78,31,'경기도',3,'과천시'),(79,31,'경기도',4,'광명시'),(80,31,'경기도',5,'광주시'),(81,31,'경기도',6,'구리시'),(82,31,'경기도',7,'군포시'),(83,31,'경기도',8,'김포시'),(84,31,'경기도',9,'남양주시'),(85,31,'경기도',10,'동두천시'),(86,31,'경기도',11,'부천시'),(87,31,'경기도',12,'성남시'),(88,31,'경기도',13,'수원시'),(89,31,'경기도',14,'시흥시'),(90,31,'경기도',15,'안산시'),(91,31,'경기도',16,'안성시'),(92,31,'경기도',17,'안양시'),(93,31,'경기도',18,'양주시'),(94,31,'경기도',19,'양평군'),(95,31,'경기도',20,'여주시'),(96,31,'경기도',21,'연천군'),(97,31,'경기도',22,'오산시'),(98,31,'경기도',23,'용인시'),(99,31,'경기도',24,'의왕시'),(100,31,'경기도',25,'의정부시'),(101,31,'경기도',26,'이천시'),(102,31,'경기도',27,'파주시'),(103,31,'경기도',28,'평택시'),(104,31,'경기도',29,'포천시'),(105,31,'경기도',30,'하남시'),(106,31,'경기도',31,'화성시'),(107,32,'강원도',1,'강릉시'),(108,32,'강원도',2,'고성군'),(109,32,'강원도',3,'동해시'),(110,32,'강원도',4,'삼척시'),(111,32,'강원도',5,'속초시'),(112,32,'강원도',6,'양구군'),(113,32,'강원도',7,'양양군'),(114,32,'강원도',8,'영월군'),(115,32,'강원도',9,'원주시'),(116,32,'강원도',10,'인제군'),(117,32,'강원도',11,'정선군'),(118,32,'강원도',12,'철원군'),(119,32,'강원도',13,'춘천시'),(120,32,'강원도',14,'태백시'),(121,32,'강원도',15,'평창군'),(122,32,'강원도',16,'홍천군'),(123,32,'강원도',18,'횡성군'),(124,33,'충청북도',1,'괴산군'),(125,33,'충청북도',2,'단양군'),(126,33,'충청북도',3,'보은군'),(127,33,'충청북도',4,'영동군'),(128,33,'충청북도',5,'옥천군'),(129,33,'충청북도',6,'음성군'),(130,33,'충청북도',7,'제천시'),(131,33,'충청북도',8,'진천군'),(132,33,'충청북도',9,'청원군'),(133,33,'충청북도',10,'청주시'),(134,33,'충청북도',11,'충주시'),(135,33,'충청북도',12,'증평군'),(136,34,'충청남도',1,'공주시'),(137,34,'충청남도',2,'금산군'),(138,34,'충청남도',3,'논산시'),(139,34,'충청남도',4,'당진시'),(140,34,'충청남도',5,'보령시'),(141,34,'충청남도',6,'부여군'),(142,34,'충청남도',7,'서산시'),(143,34,'충청남도',8,'서천군'),(144,34,'충청남도',9,'아산시'),(145,34,'충청남도',11,'예산군'),(146,34,'충청남도',12,'천안시'),(147,34,'충청남도',13,'청양군'),(148,34,'충청남도',14,'태안군'),(149,34,'충청남도',15,'홍성군'),(150,34,'충청남도',16,'계룡시'),(151,35,'경상북도',1,'경산시'),(152,35,'경상북도',2,'경주시'),(153,35,'경상북도',3,'고령군'),(154,35,'경상북도',4,'구미시'),(155,35,'경상북도',5,'군위군'),(156,35,'경상북도',6,'김천시'),(157,35,'경상북도',7,'문경시'),(158,35,'경상북도',8,'봉화군'),(159,35,'경상북도',9,'상주시'),(160,35,'경상북도',10,'성주군'),(161,35,'경상북도',11,'안동시'),(162,35,'경상북도',12,'영덕군'),(163,35,'경상북도',13,'영양군'),(164,35,'경상북도',14,'영주시'),(165,35,'경상북도',15,'영천시'),(166,35,'경상북도',16,'예천군'),(167,35,'경상북도',17,'울릉군'),(168,35,'경상북도',18,'울진군'),(169,35,'경상북도',19,'의성군'),(170,35,'경상북도',20,'청도군'),(171,35,'경상북도',21,'청송군'),(172,35,'경상북도',22,'칠곡군'),(173,35,'경상북도',23,'포항시'),(174,36,'경상남도',1,'거제시'),(175,36,'경상남도',2,'거창군'),(176,36,'경상남도',3,'고성군'),(177,36,'경상남도',4,'김해시'),(178,36,'경상남도',5,'남해군'),(179,36,'경상남도',6,'마산시'),(180,36,'경상남도',7,'밀양시'),(181,36,'경상남도',8,'사천시'),(182,36,'경상남도',9,'산청군'),(183,36,'경상남도',10,'양산시'),(184,36,'경상남도',12,'의령군'),(185,36,'경상남도',13,'진주시'),(186,36,'경상남도',14,'진해시'),(187,36,'경상남도',15,'창녕군'),(188,36,'경상남도',16,'창원시'),(189,36,'경상남도',17,'통영시'),(190,36,'경상남도',18,'하동군'),(191,36,'경상남도',19,'함안군'),(192,36,'경상남도',20,'함양군'),(193,36,'경상남도',21,'합천군'),(194,37,'전라북도',1,'고창군'),(195,37,'전라북도',2,'군산시'),(196,37,'전라북도',3,'김제시'),(197,37,'전라북도',4,'남원시'),(198,37,'전라북도',5,'무주군'),(199,37,'전라북도',6,'부안군'),(200,37,'전라북도',7,'순창군'),(201,37,'전라북도',8,'완주군'),(202,37,'전라북도',9,'익산시'),(203,37,'전라북도',10,'임실군'),(204,37,'전라북도',11,'장수군'),(205,37,'전라북도',12,'전주시'),(206,37,'전라북도',13,'정읍시'),(207,37,'전라북도',14,'진안군'),(208,38,'전라남도',1,'강진군'),(209,38,'전라남도',2,'고흥군'),(210,38,'전라남도',3,'곡성군'),(211,38,'전라남도',4,'광양시'),(212,38,'전라남도',5,'구례군'),(213,38,'전라남도',6,'나주시'),(214,38,'전라남도',7,'담양군'),(215,38,'전라남도',8,'목포시'),(216,38,'전라남도',9,'무안군'),(217,38,'전라남도',10,'보성군'),(218,38,'전라남도',11,'순천시'),(219,38,'전라남도',12,'신안군'),(220,38,'전라남도',13,'여수시'),(221,38,'전라남도',16,'영광군'),(222,38,'전라남도',17,'영암군'),(223,38,'전라남도',18,'완도군'),(224,38,'전라남도',19,'장성군'),(225,38,'전라남도',20,'장흥군'),(226,38,'전라남도',21,'진도군'),(227,38,'전라남도',22,'함평군'),(228,38,'전라남도',23,'해남군'),(229,38,'전라남도',24,'화순군'),(230,39,'제주도',1,'남제주군'),(231,39,'제주도',2,'북제주군'),(232,39,'제주도',3,'서귀포시'),(233,39,'제주도',4,'제주시');
/*!40000 ALTER TABLE `locations_location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plantbook_collect`
--

DROP TABLE IF EXISTS `plantbook_collect`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plantbook_collect` (
  `collectId` int NOT NULL AUTO_INCREMENT,
  `collectPictureUrl` varchar(500) NOT NULL,
  `collectDate` date NOT NULL,
  `collectTitle` varchar(100) NOT NULL,
  `collectContent` longtext NOT NULL,
  `collectPlace` varchar(50) NOT NULL,
  `locationId_id` int NOT NULL,
  `plantId_id` int NOT NULL,
  `userId_id` int NOT NULL,
  PRIMARY KEY (`collectId`),
  KEY `plantbook_collect_locationId_id_eccedeaf_fk_locations` (`locationId_id`),
  KEY `plantbook_collect_plantId_id_465a7366_fk_plantbook_plant_plantId` (`plantId_id`),
  KEY `plantbook_collect_userId_id_32221628_fk_accounts_user_userId` (`userId_id`),
  CONSTRAINT `plantbook_collect_locationId_id_eccedeaf_fk_locations` FOREIGN KEY (`locationId_id`) REFERENCES `locations_location` (`locationId`),
  CONSTRAINT `plantbook_collect_plantId_id_465a7366_fk_plantbook_plant_plantId` FOREIGN KEY (`plantId_id`) REFERENCES `plantbook_plant` (`plantId`),
  CONSTRAINT `plantbook_collect_userId_id_32221628_fk_accounts_user_userId` FOREIGN KEY (`userId_id`) REFERENCES `accounts_user` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plantbook_collect`
--

LOCK TABLES `plantbook_collect` WRITE;
/*!40000 ALTER TABLE `plantbook_collect` DISABLE KEYS */;
INSERT INTO `plantbook_collect` VALUES (1,'url','2022-09-30','집갈시간122222222111','밥먹고감','서울시 마포구',13,2,1),(2,'url','2022-09-30','집갈시간1','밥먹고감','서울시 마포구',13,2,2),(3,'url','2022-09-30','집갈시간1','밥먹고감','서울시 마포구',13,3,2),(4,'url','2022-10-04','테스트','테스트 내용','서울시 마포구',13,3,2);
/*!40000 ALTER TABLE `plantbook_collect` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plantbook_plant`
--

DROP TABLE IF EXISTS `plantbook_plant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plantbook_plant` (
  `plantId` int NOT NULL,
  `plantName` varchar(50) NOT NULL,
  `detailPictureUrl` varchar(500) NOT NULL,
  `plantDescription` longtext NOT NULL,
  `season` varchar(50) DEFAULT NULL,
  `classification` int NOT NULL,
  PRIMARY KEY (`plantId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plantbook_plant`
--

LOCK TABLES `plantbook_plant` WRITE;
/*!40000 ALTER TABLE `plantbook_plant` DISABLE KEYS */;
INSERT INTO `plantbook_plant` VALUES (1,'분홍 달맞이꽃','https://dolarge.s3.ap-northeast-2.amazonaws.com/0010.jpg','꽃말: 기다림\n용도: 해가 지고 어둑어둑해지면 피기 시작한다. 가로등이 있는 마을입구의 진입로에 모아심어도 달밝은 밤에 마을로 돌아오는 사람들에게 정다운 친구가 되어준다. 달맞이꽃은 기침이나 염증해소에 효과가 있다고 전래되어 오고 있으며, 실제 씨앗에 들어있는 기름으로 만든 건강식품이나 의약품들이 시판되고 있다.','[7]',1),(2,'슬리퍼 난초','https://dolarge.s3.ap-northeast-2.amazonaws.com/0020.jpg','꽃말: 튀는 아름다움\n용도: 분화용으로 종종 이용되지만 워낙 물량이 적으며 그나마 중국이나 일본에서 들어온 것들이다. 화단용으로 볕이 충분히 드는 반 그늘진 곳으로 여름에 시원한 곳에 심어두면 관상할 수 있다.','[2, 3, 4, 5, 6]',1),(3,'스위트피','https://dolarge.s3.ap-northeast-2.amazonaws.com/0030.jpg','꽃말: 기쁨, 가련\n용도: 스위트피는 봄을 상징하는 꽃으로서의 이미지가 강하고, 또한 이른 봄에 일조량이 충분하고 온도가 높아지는 지역이 적지로 지금까지 주산지는 난지로 한정되어 있었다. 그러나 재배기술과 품종개량이 계속 이루어지고 절화보존제의 이용기술도 개발되어 지금은 고냉지에서의 봄∼초여름 출하재배도 가능하게 되었다.','[5, 6]',1),(4,'금잔화','https://dolarge.s3.ap-northeast-2.amazonaws.com/0040.jpg','꽃말: 이별의 슬픔\n용도: 무수히 많은 품종들이 개량되어 봄 화단용 초화류로 확실히 자리를 잡은 품목이다. 서양에서는 오래전부터 화초용 외에도 치료약이나 허브식물로도 이용되고 있다.','[6, 7, 8, 9]',1),(5,'참나리','https://dolarge.s3.ap-northeast-2.amazonaws.com/0050.jpg','꽃말: 순결, 깨끗한 마음\n용도: 관상용으로 심고 어린 순과 인경은 식용하며, 한방에서 비늘줄기를 약재로 쓰는데, 진해, 강장 효과가 있고, 백혈구감소증에 효과가 있으며, 진정 작용, 항알레르기 작용이 있다. 정원이나 노지의 화단에 군식하거나 큰 화분에 심어 감상하면 좋고 가정에서 재배하여 절화용으로 사용하여도 좋다.','[7, 8]',1),(6,'흰색 호접란','https://dolarge.s3.ap-northeast-2.amazonaws.com/0060.jpg','꽃말: 당신을 사랑합니다.\n용도: 꽃이 아름답고 최근 공기정화기능이 알려지면서 실내 분화용으로 주로 이용되며 선물용으로 많이 쓰이다. 고급 꽃꽂이용 소재로도 종종 이용된다. 옛날에는 가격이 비싸 고급 선물용으로만 거래되었으나 대량생산 되면서 가격도 많이 내려 소비가 점차 보편화되고 있다. 꽃이 피면 3개월은 관상할 수 있다.','[12, 1]',1),(7,'극락조화','https://dolarge.s3.ap-northeast-2.amazonaws.com/0070.jpg','꽃말: 신비\n용도: 극락조화는 미국, 유럽 등 화훼 선진국에서는 꽃꽂이를 만드는 주재료로 흔히 이용되는데, 우리나라에서는 주로 온실에서 관엽 또는 분화용으로 재배되며 간혹 고급 절화용으로 쓰이기도 한다.','[3, 4, 5, 6, 7, 8]',1),(8,'절굿대','https://dolarge.s3.ap-northeast-2.amazonaws.com/0080.jpg','꽃말: 경계\n용도: 어린 잎은 식용하고, 한방에서 전초를 뿌리와 같이 회충, 인후염, 기관지염, 부스럼 등에 약재로 쓴다.','[7, 8]',1),(9,'관동화','https://dolarge.s3.ap-northeast-2.amazonaws.com/0090.jpg','의미: 겨울과 친한 꽃\n용도: 봄이 되면 나물로 채취한다. 약용하며 꽃은 약으로 사용하는 것은 꽃이 조금만 핀 것이 좋은 것이다. 관동화는 윤폐작용이 있어 진해, 거담, 가래 및 폐결핵, 폐농양에 사용하며 외감성 해수, 천식, 상기도감염증에 사용한다. 약리작용은 호흡기 분비물 증가로 진해작용, 호흡흥분과 광조불안, 혈관수축작용, 소아의 급성기관지염, 기관지천식, 인후통에 효과가 있다고 보고 되었다. ','[2, 3]',1),(10,'용왕꽃','https://dolarge.s3.ap-northeast-2.amazonaws.com/0100.jpg','꽃말: 고운 마음\n용도: 꽃이 거대하고 마치 왕자의 품격이 있어 소나무 등과 배합시켜 정월의 꽃꽂이로 이용하기도 한다. 꽃은 건조질로 상처가 작지만 잎은 변색하기 때문에 볼만하지는 않다. 그 후에는 드라이 플라워로 반복해 사용할 수 있기 때문에 이용의 폭이 넓다. 개성이 강한 잎류 등과 배합시키면 조화하기 쉽다.','[5, 6]',1),(11,'노랑꽃창포','https://dolarge.s3.ap-northeast-2.amazonaws.com/0110.jpg','꽃말: 우아한 심정, 당신을 믿는다, 그대는 정숙하다\n용도: 노랑꽃창포의 뿌리와 줄기를 생약명으로 옥선화라 하며, 주독, 상처 곪은데, 감기, 기침, 기관지염, 폐 관련 질환, 장기간 음식소화가 안되어 일어난 복부팽만증, 복통에 효력을얻고, 이뇨작용이 있어서 전신이 붓는 증상을 해소시킨다. 민간에서는 타박상에 짓찧어 붙인다.','[5, 6]',1),(12,'보라 에키네시아','https://dolarge.s3.ap-northeast-2.amazonaws.com/0120.jpg','꽃말: 영원한 행복\n용도: 허브의 일종인 에키나시아를 먹으면 감기를 50% 이상 예방할 수 있다. 약용식물로서의 잠재적 가치가 대단히 커서 학술적으로나 상업적으로 많은 관심을 끌고 있다. ','[7, 8]',1),(13,'알스트로메리아','https://dolarge.s3.ap-northeast-2.amazonaws.com/0130.jpg','꽃말: 배려, 새로운 만남, 우정\n용도: 꽃도 화려하고 색깔도 다양하여 꽃꽂이, 부케, 화환용 절화로 사용한다.','[4, 5, 6, 7]',1),(14,'도라지','https://dolarge.s3.ap-northeast-2.amazonaws.com/0140.jpg','꽃말: 영원한 사랑\n용도: 도라지의 항암효과는 주성분인 ‘사포닌’에서 나온다. 사포닌은 홍삼, 콩, 칡, 더덕 등에 함유되어 있는 성분이다. 진정, 해열뿐만 아니라 진통, 혈당 강하, 콜레스테롤 대사 개선, 항암작용, 위산분비 억제효과 등을 가지고 있다. 특히 최근에 간을 독성으로부터 보호하는 효과와 면역 증진 등에 대한 효능이 입증되면서 점차 도라지의 항암작용에 대한 관심이 강해졌다. 무엇보다 도라지의 가장 큰 항암작용은 암 세포의 소멸을 돕는다는 것이다.','[7, 8]',1),(15,'글로리오사','https://dolarge.s3.ap-northeast-2.amazonaws.com/0150.jpg','꽃말: 영광\n용도: 관상용으로 심는다.','[7, 8, 9, 10, 11]',1),(16,'체꽃','https://dolarge.s3.ap-northeast-2.amazonaws.com/0160.jpg','꽃말: 이루어질 수 없는 사랑\n용도: 관상용으로 심는다. ','[8, 9]',1),(17,'붉은꽃생강','https://dolarge.s3.ap-northeast-2.amazonaws.com/0170.jpg','꽃말: 당신을 신뢰합니다\n용도: 관상용으로 심는다.','[6, 7, 8, 9]',1),(18,'무스카리','https://dolarge.s3.ap-northeast-2.amazonaws.com/0180.jpg','꽃말: 실망, 실의\n용도: 분화용으로 생산되기도 하지만 봄에 꽃을 보는 화단이나 정원용으로 더 많이 쓰인다. 꽃 모양이 특이하고 수명도 며칠은 가기 때문에 절화용으로도 쓰인다.','[2, 3, 4, 5]',1),(19,'개양귀비','https://dolarge.s3.ap-northeast-2.amazonaws.com/0190.jpg','꽃말: 위안, 위로, 노약한 사랑\n용도: 유럽에서는 오래 전부터 농작물로 재배해 왔으며, 풍년을 상징하는 꽃으로 오랫동안 여겨 왔다. 씨는 빵에 넣어서 먹거나 기름을 짜서 쓰며, 줄기는 채소로, 빨간 꽃잎은 시럽이나 술을 담는 데에 쓴다. 동양의학에서는 복통, 설사 등에 처방한다.','[6, 7, 8]',1),(20,'수염패랭이꽃','https://dolarge.s3.ap-northeast-2.amazonaws.com/0200.jpg','꽃말: 의협심\n용도: 관상용으로 가꾸고 있다. ','[6, 7, 8]',1),(21,'카네이션','https://dolarge.s3.ap-northeast-2.amazonaws.com/0210.jpg','꽃말: 여성의 애정, 모정\n용도: 카네이션은 연중 이용할 수 있는 꽃꽂이용임에도 불구하고 우리나라에서는 아직까지 어버이날이나 스승의 날에만 쓰는 꽃으로 알려져 있다. 세계 주요 절화 중에 하나이며 소형종은 분화용으로도 인기가 있다.','[7, 8]',1),(22,'풀협죽도','https://dolarge.s3.ap-northeast-2.amazonaws.com/0220.jpg','꽃말: 주의, 방심은 금물, 청춘의 기쁨\n용도: 도로 또는 화단에 많이 심으며 백색은 향기가 많아 절화용으로 사용한다.','[6, 7, 8, 9]',1),(23,'니겔라','https://dolarge.s3.ap-northeast-2.amazonaws.com/0230.jpg','꽃말: 꿈길의 애정\n용도: 화분이나 꽃꽂이는 물론이고 드라이 플라워로 만들어도 그 아름다움에는 변함이 없다. 유럽에서는 약초로 쓰인다. 종자는 향료로 사용된다. ','[6, 7, 8]',1),(24,'코스모스','https://dolarge.s3.ap-northeast-2.amazonaws.com/0240.jpg','꽃말: 소녀의 순정\n용도: 드물게는 꽃꽂이용으로 쓰이지만 거의 대부분 길가나 공원, 정원의 화단, 부지의 경계부 등 노지화단용으로 쓰인다. 흰색부터 빨간색, 노란색 등 꽃 색이 다양하다.','[6, 7, 8, 9, 10]',1),(25,'아스트란티아','https://dolarge.s3.ap-northeast-2.amazonaws.com/0250.jpg','꽃말: 사랑의 정열\n용도: 관상용으로 심고, 풀의 주인이라 불리울만큼 서양 화단에는 많이 심는 식물이다.','[6, 7, 8, 9]',1),(26,'렌텐로즈','https://dolarge.s3.ap-northeast-2.amazonaws.com/0260.jpg','꽃말: 내 마음을 달래주오, 나의 불안을 진정시켜줘요, 나의 금심을 풀어주세요\n용도: 용도 절화용이나 꽃꽂이용, 정원용으로 심는다. 뿌리에는 사포닌이 들어있어서 강심제나 이뇨제로도 사용한다.','[7, 8]',1),(27,'포인세티아','https://dolarge.s3.ap-northeast-2.amazonaws.com/0270.jpg','꽃말: 축복, 나의 마음은 불타고 있습니다\n용도: 우리나라에서도 크리스마스 장식용으로 점차 자리를 잡아가고 있다. 가정의 분화용으로 가장 많이 쓰인다.','[11, 12]',1),(28,'천수국','https://dolarge.s3.ap-northeast-2.amazonaws.com/0280.jpg','꽃말: 헤어진 친구에게 보내는 마음, 가련한 사람, 이별의 슬픔\n용도: 관상용으로 심는다. 전초를 공작초라 하며 약용한다.','[5, 6, 7, 8, 9]',1),(29,'버터컵','https://dolarge.s3.ap-northeast-2.amazonaws.com/0290.jpg','꽃말: 천진난만함\n용도: 식물체에 독성이 있으나 생약으로 사용하고, 연한 순은 봄철에 봄나물로 식용한다. 한방에서는 뿌리를 제외한 식물체 전부를 모간이라는 약재로 쓰는데 간염으로 인한 황달을 치료하고 눈에 낀 백태를 제거한다.','[5, 6]',1),(30,'불란서국화','https://dolarge.s3.ap-northeast-2.amazonaws.com/0300.jpg','꽃말: 사랑을 밝힌다, 예언\n용도: 절화용, 화단용으로 많이 심는다.','[5, 6, 7, 8, 9]',1),(31,'민들레','https://dolarge.s3.ap-northeast-2.amazonaws.com/0310.jpg','꽃말: 사랑의 신탁, 불사신\n용도: 화단, 분화, 지면피복용 등 관상용으로 주로 쓰인다. 어린잎은 식용으로 뿌리는 약용으로 쓰는데, 뿌리를 말려 커피대용으로 음용한다고도 한다.','[4, 5, 10]',1),(32,'해바라기','https://dolarge.s3.ap-northeast-2.amazonaws.com/0320.jpg','꽃말: 동경, 숭배\n용도: 원래 씨앗으로 기름을 짜는 특용작물로 취급되어 왔으나 지금은 관상용으로도 인기가 많아 웬만한 도시의 공원이나 산책로 주변에 흔히 심겨져 있다. 꽃이 크고 아름다울 뿐만 아니라 꽃이 오래 가기 때문에 꽃꽂이용 소재로도 쓰이며 분화용으로도 이용된다.','[7, 8]',1),(33,'나비꽃','https://dolarge.s3.ap-northeast-2.amazonaws.com/0330.jpg','꽃말: 정성 어린 사랑, 잃어버린 사랑\n용도: 관상용으로 심고, 나물로도 먹을 수 있으나 독성이 있어 오랫동안 우려낸 뒤 먹는 것이 좋다. 한방에서는 근경을 소염제, 진해제, 진통, 편도선염, 폐렴, 해열, 각기, 진경, 완하제 등의 약재로 쓴다.','[7, 8, 9, 10]',1),(34,'대상화','https://dolarge.s3.ap-northeast-2.amazonaws.com/0340.jpg','꽃말: 시들어가는 사랑\n용도: 관상용으로 심는다.','[8, 9]',1),(35,'블랙 아이드 수잔','https://dolarge.s3.ap-northeast-2.amazonaws.com/0350.jpg','꽃말: 영원한 행복\n용도: 관상용으로 심는다.','[6, 7, 8, 9]',1),(36,'샤프란','https://dolarge.s3.ap-northeast-2.amazonaws.com/0360.jpg','꽃말: 온화한 미소\n용도: 꽃이 아름다워 정원용으로 아주 좋다. 분화용으로도 많이 쓰인다.','[7, 8, 9, 10]',1),(37,'바람꽃','https://dolarge.s3.ap-northeast-2.amazonaws.com/0370.jpg','꽃말: 당신만이 볼 수 있어요, 덧없는 사랑\n용도: 사는 곳이 바람이 많이 불고 그늘이 지는 높은 지대이므로 여름에도 서늘한 조건을 갖추는 곳이면 화단용으로 이용할 수 있을 것으로 생각된다. 암석원이나 시원한 낙엽수 밑에 식재하면 좋을 듯 하다.','[7, 8]',1),(38,'가자니아','https://dolarge.s3.ap-northeast-2.amazonaws.com/0380.jpg','꽃말: 수줍음\n용도: 관상용으로 심는다.','[7, 8, 9]',1),(39,'수련','https://dolarge.s3.ap-northeast-2.amazonaws.com/0390.jpg','꽃말: 당신의 사랑은 알 수 없습니다\n용도: 수련은 공원이나 가정 연못, 실내 물확같은 곳에 잘 어울린다. 꽃이 없어도 잎 모양이 좋아 봄부터 가을까지 즐길수 있으며 작은 항아리에 넣어 베란다 같은 실내공간에서 기르면 겨울 내내 상록으로 관상할 수 있다. 최근에 수생식물들이 조경용으로 많이 쓰이면서 사람들이 많이 찾고 있다.','[6, 7]',1),(40,'장미','https://dolarge.s3.ap-northeast-2.amazonaws.com/0400.jpg','꽃말: 열렬한 사랑, 질투, 순결\n용도: 1867년 이전에는 고대 장미시대로 오래된 정원 등지에 전통적으로 정원장미가 주로 개발 이용되었으나, 이 후는 현대 장미시대로 정원용은 물론 절화용으로 개발되기 시작하여 오늘에 이르고 있으며 세계 3대 절화중의 하나로 자리 잡았다.','[5, 6]',1),(41,'나팔꽃','https://dolarge.s3.ap-northeast-2.amazonaws.com/0410.jpg','꽃말: 풋사랑, 덧없는 사랑, 기쁨\n용도: 덩굴성으로 화단관상용으로 많이 심고 있다. 울타리나 벽에 기대어 심으면 자연스럽게 어우러진다. 종자는 약용으로 쓰기도 한다.','[7, 8]',1),(42,'시계초','https://dolarge.s3.ap-northeast-2.amazonaws.com/0420.jpg','꽃말: 성스러운 사랑\n용도: 관상용이고  꽃, 열매, 뿌리, 잎은 약용하고 열매는 식용하기도 한다. 즙이 많은 타원형 과일은 향기롭다. 식용의 하얀 과육은 청량음료나 아이스크림을 만드는 데 들어간다','[7, 8]',1),(43,'연꽃','https://dolarge.s3.ap-northeast-2.amazonaws.com/0430.jpg','꽃말: 배신, 청결, 신성, 당신 모습이 아름다운 것만큼 마음도 아름답다.\n용도: 꽃은 물론 잎 모양도 좋아 관상용으로 가장 많이 이용된다. 수질정화 능력도 상당한 것으로 알려져 있다. 뿌리(연근)는 채소로 잘 알려져 있다. 잎과 꽃을 모두 관상용으로 이용할 수 있어 현재 이용되는 대표적인 수생식물 중 하나로 볼 수 있다.','[7, 8]',1),(44,'뻐꾹나리','https://dolarge.s3.ap-northeast-2.amazonaws.com/0440.jpg','꽃말: 당당\n용도: 꽃도 특이하게 생겼지만 잎 모양도 좋아 정원 화단용으로 제격이다. 추위에는 비교적 강하지만 건조에는 약해서 어느 정도 습기가 유지되는 곳에서 잘자란다. 키를 좀 작게 하여 분화용으로 심어도 좋으며, 꽃대가 곧게 자라고 꽃 모양이 아름다워 꽃꽂이용으로도 우수하다.','[8, 9]',1),(45,'안수리움','https://dolarge.s3.ap-northeast-2.amazonaws.com/0450.jpg','꽃말: 번민하는 마음\n용도: 많은 종들이 관엽식물이다. 몇 종은 꽃이 화려하고 오랫동안 피기 때문에 널리 재배되어 출하된다. ','[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]',1),(46,'플루메리아','https://dolarge.s3.ap-northeast-2.amazonaws.com/0460.jpg','꽃말: 당신을 만난 건 행운\n용도: 유독성식물로 방향제로 쓰이며, 잎과 줄기에 상처를 내면 강한 독성의 흰 유액이 나온다. 매우 아름답고 향기가 있어 여인의 사랑을 받는다. 향기가 좋아서 향수의 원료나 입욕제로 많이 쓰이고, 물에 동동 띄워 감상하기도 하고, 음식을 예쁘게 장식할 때도 쓴다.','[7, 8, 9]',1),(47,'무궁화','https://dolarge.s3.ap-northeast-2.amazonaws.com/0470.jpg','꽃말: 은근, 끈기, 섬세한 아름다움\n용도: 공해에 비교적 강해서인지 전국의 도로변에서 흔히 볼수 있다. 정원수로도 좋지만 우리나라의 경우 울타리나 경계용으로 많이 쓰인다. 공원이나 자연학습장 같은 곳에서 우리나라의 모양 등 조형수로도 꽤 이용된다.','[7, 8, 9, 10]',1),(48,'아데니움','https://dolarge.s3.ap-northeast-2.amazonaws.com/0480.jpg','꽃말: 지혜\n용도: 대표적인 다육식물 중의 하나로 잎보다는 줄기에 물을 많이 함유하고 있다. 줄기 밑둥 모양도 좋지만 꽃이 아름다워 분화용이나 베란다 같은 곳에 만드는 실내정원용으로 종종 이용된다. 하지만 아데니움속 식물의 수액에는 독성이 있으므로 어린이들이 있는 곳에서는 주의가 필요하다.','[4, 5, 6]',1),(49,'모나르다','https://dolarge.s3.ap-northeast-2.amazonaws.com/0490.jpg','꽃말: 감수성이 풍부함\n용도: 화단용으로 재배한다. ','[6, 7, 8, 9]',1),(50,'부겐빌레아','https://dolarge.s3.ap-northeast-2.amazonaws.com/0500.jpg','꽃말: 조화와 정열\n용도: 천식, 기침, 독감 및 기관지염을 중심으로 하는 호흡기 감염이 있는 경우에 사용된다. 또한 피부 치료와 관련된 다른 의약 기능을 가지고 있는데, 살균 특성이 있고 벗겨짐과 여드름을 예방하는 데 이상적이다.','[4, 5, 6, 7, 8, 9, 10, 11]',1),(51,'동백','https://dolarge.s3.ap-northeast-2.amazonaws.com/0510.jpg','꽃말: 신중, 허세부리지 않음\n용도: 관상수로도 훌륭하고 또한 꽃꽂이 및 꽃다발의 소재로도 널리 사용된다. 동백 종실에는 식용기름이 함유되어 있으며 불포화 지방산 함량이 높아 식용유료도 사용한다.민간에서 토혈, 건위, 인후통, 지혈 등에 약으로 쓴다.','[1, 2, 3, 4]',1),(52,'목나팔','https://dolarge.s3.ap-northeast-2.amazonaws.com/0520.jpg','꽃말: 신비로움\n용도: 민간에서는 당뇨병이나 해열제, 진통제, 고혈압 치료제, 이뇨제로 사용했고, 피부의 가려움증, 벌레 물린 데,  염증이나 성병에 사용하기도 했다.','[6, 7, 8, 9, 10]',1),(53,'천인국','https://dolarge.s3.ap-northeast-2.amazonaws.com/0530.jpg','꽃말: 영원한 행복\n용도: 여름철 화단용으로 도로변이나 공원, 정원 등 어디서든 잘 어울린다. 초기에 나온 품종들은 키가 큰 것들이었으나 지금은 키가 20cm 이내로 작은 품종들도 나오고 있어 화단 앞부분에도 좋으며 분화용으로도 기를수 있다.','[6, 7, 8]',1),(54,'범부채','https://dolarge.s3.ap-northeast-2.amazonaws.com/0540.jpg','꽃말: 정성 어린 사랑, 잃어버린 사랑\n용도: 관상용으로 심고, 나물로도 먹을 수 있으나 독성이 있어 오랫동안 우려낸 뒤 먹는 것이 좋다. 한방에서는 근경을 소염제, 진해제, 진통, 편도선염, 폐렴, 해열, 각기, 진경, 완하제 등의 약재로 쓴다.','[7, 8]',1),(55,'칡','https://dolarge.s3.ap-northeast-2.amazonaws.com/0550.jpg','꽃말: 사랑의 한숨\n용도: 칡은 오래전부터 구황작물로 식용되었고 자양강장제 등 건강식품으로 이용되기도 하였다. 숙취제거, 혈액순환을 돕고, 소화를 원활히하며 해열작용도 하고 갈증을 완화시켜 준다.','[7, 8]',2),(56,'더덕','https://dolarge.s3.ap-northeast-2.amazonaws.com/0560.jpg','꽃말: 성실, 감사\n용도: 더덕은 면역력에 뛰어난 효과를 보이는 사포닌 성분이 다량 함유되어 있다. 특히 오래된 더덕일수록 향이 강하고 사포닌의 함량이 높다. 더덕의 면역증강물질은 더덕에 존재하는 다당류로 추정하고 있는데, 다당류는 생체 방어계의 중요한 면역세포의 증식 및 분화 등을 촉진하여 항암제로 널리 이용되고 있다.','[8, 9]',2),(57,'참당귀','https://dolarge.s3.ap-northeast-2.amazonaws.com/0570.jpg','꽃말: 재회\n용도: 어린순을 나물로 식용하고 뿌리를 당귀라고 하며 약제로 사용한다. 한방과 민간에서는 뿌리를 강장.수태.신혈.빈혈.진통.진정.이뇨.치통. 등에 약재로 쓴다. ','[6, 7, 8]',2),(58,'엉겅퀴','https://dolarge.s3.ap-northeast-2.amazonaws.com/0580.jpg','꽃말: 건드리지 마세요\n용도: 엉겅퀴는 화단용으로도 쓸 수 있으며, 어디든 잘 자라기 때문에 도로 양편 경사면의 녹화용으로도 쓸수 있다. 시골에서 어린순은 나물로 먹으며, 성숙한 것은 약용으로도 쓰인다고 한다.','[6, 7, 8]',2),(59,'독활','https://dolarge.s3.ap-northeast-2.amazonaws.com/0590.jpg','꽃말: 애절, 희생\n용도: 다른 산채와 달리 생채로도 먹을 수 있고 삶아서 무침, 부침, 튀김, 저림 등으로 이용하며 염장하면 장기저장도 가능하다. 뿌리는 약용하는데, 근육통, 하반신마비, 두통, 중풍의 반신불수 등에 많이 쓰인다.','[7, 8]',2),(60,'하수오','https://dolarge.s3.ap-northeast-2.amazonaws.com/0600.jpg','의미: 흰 머리카락이 검어진다\n용도: 생적하수오는 윤장통변, 해창독 등의 효능이 있으며, 법제된 적하수오는 보간신, 익정혈 등의 효능이 있다. 생적하수오는 나력, 옹창, 변비 등을 치료하고, 법제된 적하수오는 간신음허, 혈소, 현훈실면 등을 치료한다. 적하수오는  산삼,구기자와 함께  중국의 3대 명약으로 알려져 있다. ','[8, 9]',2),(61,'창포','https://dolarge.s3.ap-northeast-2.amazonaws.com/0610.jpg','꽃말: 우아한 마음, 좋은 소식\n용도: 민간에서는 단옷날 창포를 넣어 끓인 물로 머리를 감고 목욕을 하는 풍습이 있다. 한방에서는 건위, 진경, 거담 등에 효능이 있어 약재로 이용하며, 뿌리를 소화불량, 설사, 기관지염 등에 사용한다. 또한 뿌리줄기는 방향성 건위제로 사용한다. ','[6, 7]',2),(62,'우엉','https://dolarge.s3.ap-northeast-2.amazonaws.com/0620.jpg','꽃말: 인격자, 괴롭히지 말아요\n용도: 뿌리와 어린 잎을 식용하고, 한방에서 뿌리 및 열매를 관절염, 해독, 풍열, 이뇨, 중풍, 발한, 인후통, 독충의 해독제 등에 약재로 쓴다. ','[7]',2),(63,'익모초','https://dolarge.s3.ap-northeast-2.amazonaws.com/0630.jpg','꽃말: 모정\n용도: 밀원용, 방향성 식물이며 포기 전체를 말려서 약초로 사용한다. 익모초는 산전산후 부인들이 활용하는 보약으로 이름이 알려져있으며, 각종 여성병에 뛰어난 효능이 있다. 주요 약효는 혈액순환을 촉진하고 어혈을 제거하며 인체의 수분대사를 조절하여 부종을 해소하는 효능이 있다.','[7, 8]',2),(64,'인동덩굴','https://dolarge.s3.ap-northeast-2.amazonaws.com/0640.jpg','꽃말: 사랑의 연인\n용도: 인동은 약용으로 이용되기도 하지만, 반 상록성인 덩굴성으로 잎 모양이 좋고 6∼7월에 백색으로 피는 꽃 모양이 아름다울 뿐만 아니라, 9∼10월에 검은 색으로 익는 열매도 보기가 좋아 울타리나 정원, 화단용 등 관상용으로 적합하다. 특히 추위나 공해에 강하기 때문에 도로변에 조경용으로 감고 올라갈 수 있는 적당한 지지대를 설치하여 심어도 좋다.','[6, 7]',2),(65,'천궁','https://dolarge.s3.ap-northeast-2.amazonaws.com/0650.jpg','꽃말: 고결, 정신적 아름다움\n용도: 한방에서는 뿌리줄기를 진정 , 진통 , 강장에 효능이 있어 두통 , 빈혈증 , 부인병 등에 사용한다. 방향성 식물이며 민간에서는 좀을 예방하기 위해 옷장에 넣어 둔다','[8, 9]',2),(66,'꽃향유','https://dolarge.s3.ap-northeast-2.amazonaws.com/0660.jpg','꽃말: 조숙, 성숙\n용도: 햇볕이 잘 드는 곳이면 정원 어디든 좋다. 4월에 씨앗을 뿌려도 그 해 가을이면 키가 50-60cm 정도로 자라며 꽃이 많이 달리고 한 달이상 피어 가을화단용으로 충분하다. 꽃향기가 매우 강하다.','[9, 10]',2),(67,'인삼','https://dolarge.s3.ap-northeast-2.amazonaws.com/0670.jpg','꽃말: 축복, 나의 마음은 불타고 있습니다.\n용도: 암, 당뇨병, 남성기능 향상, 고혈압, 동맥경화, 치매, 혈액순환 개선, 골다공증 예방, 노화방지, 두뇌활동 촉진, 간장보호, 위장병, 면역기능 증가, 갱년기장애, 여성 피부미용 등에 좋은 것으로 알려져 있다.','[5, 6]',2);
/*!40000 ALTER TABLE `plantbook_plant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `titles_obtained`
--

DROP TABLE IF EXISTS `titles_obtained`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `titles_obtained` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `isRep` tinyint(1) NOT NULL,
  `titleId_id` int NOT NULL,
  `userId_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `titles_obtained_titleId_id_e1e7e732_fk_titles_title_titleId` (`titleId_id`),
  KEY `titles_obtained_userId_id_aa600fd7_fk_accounts_user_userId` (`userId_id`),
  CONSTRAINT `titles_obtained_titleId_id_e1e7e732_fk_titles_title_titleId` FOREIGN KEY (`titleId_id`) REFERENCES `titles_title` (`titleId`),
  CONSTRAINT `titles_obtained_userId_id_aa600fd7_fk_accounts_user_userId` FOREIGN KEY (`userId_id`) REFERENCES `accounts_user` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `titles_obtained`
--

LOCK TABLES `titles_obtained` WRITE;
/*!40000 ALTER TABLE `titles_obtained` DISABLE KEYS */;
INSERT INTO `titles_obtained` VALUES (1,0,1,3),(2,1,2,3),(3,0,3,3);
/*!40000 ALTER TABLE `titles_obtained` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `titles_title`
--

DROP TABLE IF EXISTS `titles_title`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `titles_title` (
  `titleId` int NOT NULL AUTO_INCREMENT,
  `titleName` varchar(50) NOT NULL,
  `titleDescription` varchar(200) NOT NULL,
  `titlePictureUrl` varchar(500) NOT NULL,
  PRIMARY KEY (`titleId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `titles_title`
--

LOCK TABLES `titles_title` WRITE;
/*!40000 ALTER TABLE `titles_title` DISABLE KEYS */;
INSERT INTO `titles_title` VALUES (1,'이린이','첫 식물 채집 시 획득 가능해요','https://dolarge.s3.ap-northeast-2.amazonaws.com/active_0010.png'),(2,'도라지 마스터','도라지를 세 번 이상 채집 시 획득 가능해요','https://dolarge.s3.ap-northeast-2.amazonaws.com/active_0020.png'),(3,'심마니','첫 산삼 채집 시 획득 가능해요','https://dolarge.s3.ap-northeast-2.amazonaws.com/active_0030.png');
/*!40000 ALTER TABLE `titles_title` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-07  7:42:53
