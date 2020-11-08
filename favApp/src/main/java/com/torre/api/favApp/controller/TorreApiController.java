package com.torre.api.favApp.controller;

import org.springframework.web.bind.annotation.RestController;

import com.torre.api.favApp.dao.TorreDAO;
import com.torre.api.favApp.dto.FavoriteDTO;
import com.torre.api.favApp.dto.SkillMainDTO;
import com.torre.api.favApp.facade.TorreFacade;
import com.torre.api.favApp.restClient.RestClienteTorre;

import java.sql.SQLException;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@RestController
public class TorreApiController {
	RestClienteTorre client = new RestClienteTorre();
	TorreFacade facade = new TorreFacade();
	@CrossOrigin
	@GetMapping("/username")
	public String validateUser(@RequestParam(name="username", required=false) String username) {
	    return client.getUser(username);
	  }
	@CrossOrigin
	@PostMapping("/searchJobs")
	public String searchJobs(
			  @RequestParam(name="offset", required=false) String offset,
			  @RequestBody SkillMainDTO skill
			  ) {
	    return client.serachJobs(offset, skill);
	  }
	
	@CrossOrigin
	@GetMapping("/getFavs")
	@ResponseBody
	public List<FavoriteDTO> getFavs(@RequestParam(name="userid", required=false) String userid,
			  @RequestParam(name="isFav", required=false) boolean isFav) {
	
	    return facade.getFavs(userid, isFav);
	  }
		
	@CrossOrigin
	@PostMapping("/insertFav")
	public void insertFav(@RequestParam(name="idUser", required=false) String idUser,
			@RequestParam(name="idJob", required=false) String idJob,
			@RequestParam(name="jobName", required=false) String jobName,
			@RequestParam(name="isFav", required=false) boolean isFav) {
		
		facade.insertFav(idUser, idJob, jobName, isFav);
	  }

	
}
