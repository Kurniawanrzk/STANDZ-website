import 'dart:html';
import 'package:dio/dio.dart' as d;
import 'package:flutter/material.dart';
import 'package:standzclient/model/user.dart';
import 'package:standzclient/service/dio.dart';
import 'package:go_router/go_router.dart';

class Auth extends ChangeNotifier {
  bool _isLoggedIn = false;
  User? _user;
  String? _token;

  bool get authenticated => _isLoggedIn;
  User? get user => _user;


  Future<void> login({Map ?credential}) async {
    try {
      d.Response response = await dio().post('/auth/login', data: credential);
      print(response.data.toString());
      await tryToken(response.data['access_token']);
      _isLoggedIn = true;
      notifyListeners();
    } catch (e) {
      print(e);
      // Handle login failure
      _isLoggedIn = false;
      notifyListeners();
    }
  }

  Future<void> storeToken(String token) async {
    try {
         window.localStorage['token'] = token; 
    } catch (e) {
      print(e);      
    }
  }
  Future<void> tryToken(String token) async {
    if (token.isEmpty) {
      return;
    } else {
      try {
        d.Response response = await dio().get('/auth/user',
        options: d.Options(headers: {'Authorization': "Bearer $token"}));
        _isLoggedIn = true;
        _user = User.fromJson(response.data);
        storeToken(token);
        notifyListeners();
      } catch (e) {
        print(e);
      }
    }
  }

  void logout(context) async{
     try {
        String token = window.localStorage['token'].toString();
        d.Response response = await dio().post('/auth/logout',
        options: d.Options(headers: {'Authorization': "Bearer $token"}));
        response;
        _isLoggedIn = false;
        notifyListeners();
      } catch (e) {
        print(e);
      }

  }
}
