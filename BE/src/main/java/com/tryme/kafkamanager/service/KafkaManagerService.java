package com.tryme.kafkamanager.service;

//import com.tryme.EmployeeManager.Model.Employee;
import com.tryme.kafkamanager.Model.Producer;
//import com.tryme.EmployeeManager.repo.EmployeeRepo;
import com.tryme.kafkamanager.msq.ProducerMsq;
import org.springframework.stereotype.Service;

//import javax.transaction.Transactional;


@Service
public class KafkaManagerService {
//    private final EmployeeRepo employeeRepo;
//
//    @Autowired
//    public EmployeeService(EmployeeRepo employeeRepo) {
//        this.employeeRepo = employeeRepo;
//    }

      public Producer addProducer(Producer producer) {
//          employee.setEmployeeCode(UUID.randomUUID().toString());
//          return employeeRepo.save(employee);
          ProducerMsq.produce(producer.getBootstrapServers(),producer.getTopicName(),producer.getMessage());
          return producer;
    }

//    public Employee addEmployee(Employee employee) {
//        employee.setEmployeeCode(UUID.randomUUID().toString());
//        return employeeRepo.save(employee);
//    }
//
//    public List<Employee> findAllEmployees() {
//        return employeeRepo.findAll();
//    }
//
//    public Employee updateEmployee(Employee employee) {
//        return employeeRepo.save(employee);
//    }
//
//    public Employee findEmployeeById(Long id) {
//        return employeeRepo.findEmployeeById(id)
//            .orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
//    }
//
//    public void deleteEmployee(Long id){
//        employeeRepo.deleteEmployeeById(id);
//    }
}