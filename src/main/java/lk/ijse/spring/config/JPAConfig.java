package lk.ijse.spring.config;


import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

@EnableJpaRepositories(basePackages = "lk.ijse.spring.repo")
    @EnableTransactionManagement
    public class JPAConfig {

        @Bean
        public LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource dataSource, JpaVendorAdapter vendorAdapter){
            LocalContainerEntityManagerFactoryBean bean = new LocalContainerEntityManagerFactoryBean();
            bean.setJpaVendorAdapter(vendorAdapter);
            bean.setDataSource(dataSource);
            bean.setPackagesToScan("lk.ijse.spring.entity");

            return bean;

        }

        @Bean
        public DataSource dataSource(){
            DriverManagerDataSource dataSource = new DriverManagerDataSource();
            dataSource.setUrl("jdbc:mysql://localhost:3306/carRental?createDatabaseIfNotExist=true");
            dataSource.setUsername("root");
            dataSource.setPassword("1234");
            dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
            return dataSource;
        }

        @Bean
        public JpaVendorAdapter jpaVendorAdapter(){
            HibernateJpaVendorAdapter vendor = new HibernateJpaVendorAdapter();
            vendor.setDatabasePlatform("org.hibernate.dialect.MariaDB106Dialect");
            vendor.setDatabase(Database.MYSQL);
            vendor.setShowSql(true);
            vendor.setGenerateDdl(true);
            return vendor;
        }

        @Bean
        public JpaTransactionManager transactionManager(EntityManagerFactory emf){
            return new JpaTransactionManager(emf);
        }



}
