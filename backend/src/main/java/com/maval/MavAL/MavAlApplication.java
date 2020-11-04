package com.maval.MavAL;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@SpringBootApplication
@EnableJpaRepositories()
public class MavAlApplication {

	public static void main(String[] args) {
		new SpringApplicationBuilder(MavAlApplication.class)
				.profiles("dev")
				.run(args);
	}

	@Component
	public static class AppStartupRunner implements ApplicationRunner {
		private final Environment env;

		public AppStartupRunner(Environment env) {
			this.env = env;
		}

		@Override
		public void run(ApplicationArguments args) throws Exception {
			System.out.println("Active profiles: " + Arrays.toString(env.getActiveProfiles()));
		}
	}
}
