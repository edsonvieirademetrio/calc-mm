# Host: localhost  (Version: 5.7.9-log)
# Date: 2019-10-31 22:18:47
# Generator: MySQL-Front 5.3  (Build 4.263)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "config"
#

DROP TABLE IF EXISTS `config`;
CREATE TABLE `config` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `numero_de_valores` int(11) NOT NULL DEFAULT '0',
  `prazo_min` varchar(100) NOT NULL DEFAULT '0',
  `prazo_max` varchar(100) NOT NULL DEFAULT '0',
  `prazo_salto` varchar(100) NOT NULL DEFAULT '0',
  `juros_padrao` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Data for table "config"
#

INSERT INTO `config` VALUES (1,8,'12','60','12','1.13');

#
# Structure for table "invests_concorrencia"
#

DROP TABLE IF EXISTS `invests_concorrencia`;
CREATE TABLE `invests_concorrencia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL DEFAULT '',
  `juros` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

#
# Data for table "invests_concorrencia"
#

INSERT INTO `invests_concorrencia` VALUES (1,'Tesouro Direto','0.2'),(2,'Poupança','0.5'),(3,'CDI/CDB','0.9');

#
# Structure for table "matchmoney"
#

DROP TABLE IF EXISTS `matchmoney`;
CREATE TABLE `matchmoney` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `valor_invest` varchar(255) NOT NULL DEFAULT '',
  `prazo` varchar(255) DEFAULT NULL,
  `juros` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

#
# Data for table "matchmoney"
#

INSERT INTO `matchmoney` VALUES (13,'1000','12','1.5'),(14,'1000','24','1.8'),(15,'3000','36','5.6'),(16,'3000','48','6.0');

#
# Structure for table "valores"
#

DROP TABLE IF EXISTS `valores`;
CREATE TABLE `valores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `valor` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

#
# Data for table "valores"
#

INSERT INTO `valores` VALUES (1,'1000'),(2,'2500'),(3,'3000'),(4,'4000'),(5,'5000'),(6,'6000'),(7,'7000'),(8,'10000');
