class User {
  String name;
  String username;
  String email;

  User({
    required this.name, required this.username, required this.email
  });

  User.fromJson(Map<String, dynamic> json) 
  : name = json['name'],
    username = json['username'],
    email = json['email'];
  
}