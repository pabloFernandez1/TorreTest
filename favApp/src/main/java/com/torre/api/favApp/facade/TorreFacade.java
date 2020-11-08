package com.torre.api.favApp.facade;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.aop.ThrowsAdvice;
import org.springframework.web.bind.annotation.RequestParam;

import com.torre.api.favApp.dao.TorreDAO;
import com.torre.api.favApp.dto.FavoriteDTO;

public class TorreFacade {
	TorreDAO dao = new TorreDAO("jdbc:mysql://localhost:3306/torre_bd", "torre_app", "admin");
	public List<FavoriteDTO> getFavs(String userid, boolean isFav){
		List<FavoriteDTO> dtos = new ArrayList<>();
		try {
			dtos=dao.getFavs(userid, isFav);
		} catch (InstantiationException | IllegalAccessException | ClassNotFoundException | SQLException e) {
			e.printStackTrace();
			throw new RuntimeException();
		}
		return dtos;
	}
	public void insertFav(String userId, String idJob, String jobName, boolean liked){
		try {
			dao.insertFav(userId,idJob, jobName, liked);
		} catch (InstantiationException | IllegalAccessException | ClassNotFoundException | SQLException e) {
			e.printStackTrace();
			throw new RuntimeException();
		}
	}
}
