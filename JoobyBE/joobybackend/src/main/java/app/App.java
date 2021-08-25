package app;

import io.jooby.CorsHandler;
import io.jooby.Jooby;
import io.jooby.ServerOptions;

public class App extends Jooby {

  {
    decorator(new CorsHandler());
    mvc(new Controller());

    setServerOptions(new ServerOptions().setPort(8081));

  }

  public static void main(final String[] args) {

    runApp(args, App::new);
  }

}
