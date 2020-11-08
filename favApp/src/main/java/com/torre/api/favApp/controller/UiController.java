package com.torre.api.favApp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequiredArgsConstructor
public class UiController {
	@RequestMapping({"/"})
	public String loadUI() {
		return "forward:/ui/index.html";
	}

}
