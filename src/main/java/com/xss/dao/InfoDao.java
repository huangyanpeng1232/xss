package com.xss.dao;

import com.xss.bean.Info;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface InfoDao {

    @Insert("INSERT INTO `info` (`href`, `origin`, `protocol`, `host`, `hostname`, `port`, `pathname`, `html`, `cookie`, `browserType`, `property`, `appName`, `appVersion`, `cookieEnabled`, `sysType`, `plugins`, `pluginsLength`, `pluginsName`, `flashEnabled`, `windowWidth`, `colorDepth`, `insertTime`) VALUES ( #{href}, #{origin}, #{protocol}, #{host}, #{hostname}, #{port}, #{pathname}, #{html}, #{cookie}, #{browserType}, #{property}, #{appName}, #{appVersion}, #{cookieEnabled}, #{sysType}, #{plugins}, #{pluginsLength}, #{pluginsName}, #{flashEnabled}, #{windowWidth}, #{colorDepth},now())")
    void save(Info info);
}
