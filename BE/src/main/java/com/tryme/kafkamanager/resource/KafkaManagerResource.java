package com.tryme.kafkamanager.resource;


import com.tryme.kafkamanager.Model.Producer;
import com.tryme.kafkamanager.service.KafkaManagerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/kafka")
public class KafkaManagerResource {
    private final KafkaManagerService employeeService;

    public KafkaManagerResource(KafkaManagerService employeeService) {
        this.employeeService = employeeService;
    }

//    @CrossOrigin(origins = "http://localhost:4200")
//    @GetMapping("/all")
//    public ResponseEntity<List<Employee>> getAllEmployees () {
//        List<Employee> employees = employeeService.findAllEmployees();
//        return new ResponseEntity<>(employees, HttpStatus.OK);
//    }

//    @CrossOrigin(origins = "http://localhost:4200")
//    @GetMapping("/find/{id}")
//    public ResponseEntity<Employee> getEmployeeById (@PathVariable("id") Long id) {
//        Employee employee = employeeService.findEmployeeById(id);
//        return new ResponseEntity<>(employee, HttpStatus.OK);
//    }

//    @CrossOrigin(origins = "http://localhost:4200")
//    @PostMapping("/add")
//    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
//        Employee newEmployee = employeeService.addEmployee(employee);
//        return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
//    }

    //    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/producer")
    public ResponseEntity<Producer> addProducer(@RequestBody Producer producer) {

        Producer newProducer = employeeService.addProducer(producer);
        return new ResponseEntity<>(newProducer, HttpStatus.CREATED);
    }

    //    @CrossOrigin(origins = "http://localhost:4200")
//    @PostMapping("/addConsumer")
//    public ResponseEntity<Producer> addConsumer(@RequestBody Employee employee) {
//        Producer newEmployee = employeeService.addProducer(employee);
//        return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
//    }

//    @CrossOrigin(origins = "http://localhost:4200")
//    @PutMapping("/update")
//    public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee) {
//        Employee updateEmployee = employeeService.updateEmployee(employee);
//        return new ResponseEntity<>(updateEmployee, HttpStatus.OK);
//    }

//    @CrossOrigin(origins = "http://localhost:4200")
//    @DeleteMapping("/delete/{id}")
//    public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id) {
//        employeeService.deleteEmployee(id);
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
}