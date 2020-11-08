package com.torre.api.favApp.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.torre.api.favApp.dto.FavoriteDTO;


public class TorreDAO {
	String CONST_URL;
    String CONST_USER;
    String CONST_PASS;
	public TorreDAO(String cONST_URL, String cONST_USER, String cONST_PASS) {
		CONST_URL = cONST_URL;
		CONST_USER = cONST_USER;
		CONST_PASS = cONST_PASS;
	}
	public List<FavoriteDTO> getFavs(String iduser, boolean isLiked) throws SQLException, InstantiationException, IllegalAccessException, ClassNotFoundException {
		Connection conex;
		List<FavoriteDTO> dtos = new ArrayList<>();
		Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
		conex=DriverManager.getConnection(CONST_URL,CONST_USER,CONST_PASS);
		Statement stmt=conex.createStatement();
		String like = isLiked?"1":"0";
		String query = "SELECT id_publication, name_publication FROM favorites WHERE id_user =\""+iduser+"\" AND liked = "+ like;
		System.out.println(query);
		ResultSet rs=stmt.executeQuery(query);
		while(rs.next()){
			FavoriteDTO dto = new FavoriteDTO();
			dto.setIdJob(rs.getString("id_publication"));
			dto.setJobName(rs.getString("name_publication"));
			dtos.add(dto);
		}
		try{
            conex.close();
            rs.close();
        }catch(Exception e){
            e.printStackTrace();
        }
		return dtos;
	}
	public void insertFav (String userId, String idJob, String jobName, boolean liked) throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException {
		String isliked = liked?"1":"0";
		Connection conex;
		try{
			Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
			conex=DriverManager.getConnection(CONST_URL,CONST_USER,CONST_PASS);
			Statement stmt=conex.createStatement();
			String query = "call insert_match(\""+userId+"\", \""+idJob+"\", \""+jobName+"\", "+liked+")";
			System.out.println(query);
			stmt.executeQuery(query);
	        conex.close();
	        stmt.close();
        }catch(Exception e){
            e.printStackTrace();
        }
	}
    

}
