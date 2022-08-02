
-- local  ------------------------------------


CREATE TABLE `Agent_Care`.`tbl_Agent_Master`
( 
    `tb_Agent_ID` INT(255) NOT NULL AUTO_INCREMENT , 
    `tb_Agent_BPCode` VARCHAR(10) NOT NULL ,
    `tb_Agent_title` VARCHAR(10) NOT NULL , 
    `tb_Agent_name` VARCHAR(100) NOT NULL ,
    `tb_Agent_houseno` VARCHAR(10),
    `tb_Agent_street1` VARCHAR(100),
    `tb_Agent_street2` VARCHAR(100),
    `tb_Agent_street3` VARCHAR(100),
    `tb_Agent_street4` VARCHAR(100),
    `tb_Agent_city` VARCHAR(50),
    `tb_Agent_district` VARCHAR(50),
    `tb_Agent_postalcode` VARCHAR(10),
    `tb_Agent_regionname` VARCHAR(20) NOT NULL,
    `tb_Agent_mobile` VARCHAR(20),
    `tb_Agent_telephone` VARCHAR(20),
    `tb_Agent_emailid` VARCHAR(50),
    `tb_Agent_custgroup` VARCHAR(10)NOT NULL,
    `tb_Agent_custstatus` VARCHAR(2)NOT NULL,
    `tb_Agent_createddate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `tb_Agent_updateddate` TIMESTAMP default now() on update now(),
    PRIMARY KEY(`tb_Agent_ID`)
) ENGINE = InnoDB;
---------------------------------------------------------

