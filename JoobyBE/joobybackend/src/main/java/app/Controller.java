package app;

import app.models.User;
import io.jooby.StatusCode;
import io.jooby.annotations.*;
import org.json.JSONArray;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Objects;


public class Controller {
  HashMap<String, User> users = new HashMap<>();

  @Path("/")
  @Transactional(true)
  @GET
  public String sayHi() {
    return "Welcome to Jooby!";
  }


  @POST
  @Path("/addUser")
  public void addUser(@QueryParam String name, @QueryParam String surname, @QueryParam String email, @QueryParam String password){
    User newUser = new User(name, surname, email, password);
    users.put(email, newUser);
  }

  @Path("/getUsers")
  @GET
  public JSONArray getUsers(){
    try {
      ArrayList<User> arraylist = new ArrayList();
      for (User user : users.values()) {
        arraylist.add(user);
      }
      JSONArray jsArray = new JSONArray(arraylist);
      return jsArray;
    }
    catch (Exception e){
      System.out.println(e.getMessage());
    }
    return null;
  }

  @Path("/login")
  @GET
  public StatusCode login(@QueryParam String email, @QueryParam String password){
    boolean validEmail = users.containsKey(email);
    if (validEmail){
      User user = users.get(email);
      System.out.println(user.getPassword() + " "+password);
      if(Objects.equals(user.getPassword(), password)){
       return StatusCode.OK;
      }
    }
    return StatusCode.UNAUTHORIZED;
  }
  @Path("/reset")
  @GET
  public StatusCode reset(@QueryParam String email) {
    boolean validEmail = users.containsKey(email);
    if (validEmail) {
      return StatusCode.OK;
    }
    return StatusCode.UNAUTHORIZED;
  }

  @Path("/confirm")
  @GET
  public void confirmPassword(@QueryParam String email, @QueryParam String password){
    User user = users.get(email);
    user.setPassword(password);
    return;
  }


}
