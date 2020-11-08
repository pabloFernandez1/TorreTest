package com.torre.api.favApp.restClient;

import org.json.JSONObject;
import org.springframework.web.client.RestTemplate;

import com.torre.api.favApp.dto.SkillMainDTO;

public class RestClienteTorre {
	private RestTemplate restTemplate = new RestTemplate();
	private final String validateURL = "https://bio.torre.co/api/";
	private final String searchURL = "https://search.torre.co/";
	private final String oportunitie = "opportunities";
	private final String people = "people";
	private final String params = "/_search/?size=1&aggregate=false&offset=";
	public String getUser(String id){
		 return restTemplate
				 .getForEntity(validateURL+"bios/"+id, String.class)
				 .getBody();
	}
	public String getJob(String id){
		 return restTemplate
				 .getForEntity(validateURL+"opportunities/"+id, String.class)
				 .getBody();
	}
	public String serachJobs(String offset, SkillMainDTO request ){
		String json = "{\"skill/role\": {\"text\": \""+request.getSkill().getText()+"\", \"experience\": \""
				 + request.getSkill().getExperience() + "\" }}";
		System.out.println(json);
		JSONObject jsonObject = new JSONObject(json);
		 return restTemplate
				 .postForEntity(searchURL+oportunitie+params+offset, jsonObject, String.class)
				 .getBody();
	}


}
