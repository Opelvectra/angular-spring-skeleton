package com.atata.new_project;

import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@RequestMapping(value = { "/", "/login", "/state1", "/state2" },
			method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		System.out.println("HomeController!");
		return "base_template";
	}
	
	@RequestMapping(value = { "/" }, method = RequestMethod.GET, 
			produces = { MediaType.APPLICATION_JSON_VALUE })
	@ResponseBody
	public String getHomeState(ModelMap model, HttpServletRequest request,
			HttpServletResponse response) throws Throwable {
		
		JSONObject result = new JSONObject();
		result.put("stateInfo", "HomeState");
		//Thread.sleep(400L);
		return result.toString();
	}
	
	@RequestMapping(value = { "/state1" }, method = RequestMethod.GET, 
			produces = { MediaType.APPLICATION_JSON_VALUE })
	@ResponseBody
	public String getState1(ModelMap model, HttpServletRequest request,
			HttpServletResponse response) throws Throwable {
		
		JSONObject result = new JSONObject();
		result.put("stateInfo", "State1");
		//Thread.sleep(400L);
		return result.toString();
	}
	
	@RequestMapping(value = { "/state2" }, method = RequestMethod.GET, 
			produces = { MediaType.APPLICATION_JSON_VALUE })
	@ResponseBody
	public String getState2(ModelMap model, HttpServletRequest request,
			HttpServletResponse response) throws Throwable {
		
		JSONObject result = new JSONObject();
		result.put("stateInfo", "State2");
		//Thread.sleep(400L);
		return result.toString();
	}
	
}
