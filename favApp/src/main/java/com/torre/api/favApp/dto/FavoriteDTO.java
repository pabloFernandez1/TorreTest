package com.torre.api.favApp.dto;

public class FavoriteDTO {
	private String idUser;
	private String idJob;
	private boolean liked;
	private String jobName;
	
	public String getIdUser() {
		return idUser;
	}
	public void setIdUser(String idUser) {
		this.idUser = idUser;
	}
	public String getIdJob() {
		return idJob;
	}
	public void setIdJob(String idJob) {
		this.idJob = idJob;
	}
	public boolean isLiked() {
		return liked;
	}
	public void setLiked(boolean liked) {
		this.liked = liked;
	}
	public String getJobName() {
		return jobName;
	}
	public void setJobName(String jobName) {
		this.jobName = jobName;
	}
	
}
