
-- local  ------------------------------------


CREATE TABLE `Agent_Care`.`tbl_UserProfile`
( 
    `tb_UP_UserID`  INT(10) NOT NULL AUTO_INCREMENT ,
`tb_UP_BPcode`  INT(10) NOT NULL,
`tb_UP_BPDesc`  VARCHAR(50) NOT NULL,
`tb_UP_title`  VARCHAR(10),
`tb_UP_name`  VARCHAR(50) NOT NULL,
`tb_UP_houseno`  VARCHAR(10),
`tb_UP_street1`  VARCHAR(100),
`tb_UP_street2`  VARCHAR(100),
`tb_UP_street3`  VARCHAR(100),
`tb_UP_street4`  VARCHAR(100),
`tb_UP_city`  VARCHAR(50),
`tb_UP_district`  VARCHAR(50),
`tb_UP_postalcode`  VARCHAR(10),
`tb_UP_regionname`  VARCHAR(50) NOT NULL,
`tb_UP_mobile`  VARCHAR(10),
`tb_UP_emailid`  VARCHAR(50),
`tb_UP_usergroup`  VARCHAR(10) NOT NULL,
`tb_UP_userstatus`  VARCHAR(10) NOT NULL,
`tb_UP_password`  VARCHAR(100) NOT NULL,
`tb_UP_createddate`  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
`tb_UP_updateddate`  TIMESTAMP default now() on update now(),
    PRIMARY KEY(`tb_UP_UserID`)
) ENGINE = InnoDB;
---------------------------------------------------------

