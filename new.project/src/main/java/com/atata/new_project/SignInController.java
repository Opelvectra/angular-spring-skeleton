package com.atata.new_project;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SignInController {

	@RequestMapping(value = { "/login" }, method = { RequestMethod.POST })
	@ResponseBody
	public String getHomeState(ModelMap model, HttpServletRequest request,
			HttpServletResponse response) throws Throwable {
		
		JSONObject result = new JSONObject();
		result.put("stateInfo", "login");
		System.out.println("Here you can logggin!!!");
		//Thread.sleep(400L);
		return result.toString();
	}
}
