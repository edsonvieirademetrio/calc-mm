# Host: localhost  (Version: 5.7.9-log)
# Date: 2019-08-30 21:55:51
# Generator: MySQL-Front 5.3  (Build 4.263)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "calculadora"
#

DROP TABLE IF EXISTS `calculadora`;
CREATE TABLE `calculadora` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `valor_min` varchar(11) DEFAULT NULL,
  `valor_max` varchar(11) DEFAULT NULL,
  `valor_salto` varchar(11) DEFAULT NULL,
  `prazo_min` varchar(11) DEFAULT NULL,
  `prazo_max` varchar(11) DEFAULT NULL,
  `prazo_salto` varchar(11) DEFAULT NULL,
  `investimento1` varchar(255) DEFAULT NULL,
  `investimento2` varchar(255) DEFAULT NULL,
  `investimento3` varchar(255) DEFAULT NULL,
  `investimento_match_money` varchar(255) DEFAULT NULL,
  `juros_invest1` varchar(16) DEFAULT NULL,
  `juros_invest2` varchar(16) DEFAULT NULL,
  `juros_invest3` varchar(16) DEFAULT NULL,
  `juros_invest_match` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

#
# data for table "calculadora"
#

INSERT INTO `calculadora` VALUES (4,'1000','10000','1000','12','60','12','Poupança','CDI','Tesouro Direto','Match Money','0.50','1.0','1.34','3.0');
