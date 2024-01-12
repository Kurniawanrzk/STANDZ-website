import 'package:dio/dio.dart';

Dio dio() {
  Dio dio = new Dio();
  dio.options.baseUrl = 'http://127.0.0.1:8000/api/v1';
  dio.options.headers['accept'] = 'Application/json';
  return dio;
}