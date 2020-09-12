package com.maval.MavAL;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.stereotype.Component;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication()
@EnableJpaRepositories
public class MavAlApplication {

	public static void main(String[] args) {
		SpringApplication.run(MavAlApplication.class, args);
	}

	@Component
	public static class AppStartupRunner implements ApplicationRunner {
		@Override
		public void run(ApplicationArguments args) throws Exception {

		}
	}
}
