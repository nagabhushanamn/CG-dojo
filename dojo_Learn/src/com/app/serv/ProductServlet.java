package com.app.serv;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ProductServlet
 */
//@WebServlet("/hello")
public class ProductServlet extends HttpServlet {
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		System.out.println("Hello Request...");
	}
	
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

		String name = request.getParameter("name");
		String price = request.getParameter("price");
		String desc = request.getParameter("description");

		// Map to Model

		System.out.println(name + " " + price + " " + desc);

		//
		response.setContentType("text/plain");
		PrintWriter out = response.getWriter();
		out.print("Success");
		out.close();

	}

}
