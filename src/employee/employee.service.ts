import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}
  async findAll(): Promise<Employee[]> {
    return await this.employeeRepository.find();
  }
  create(employee: Employee): Promise<Employee> {
    return this.employeeRepository.save(employee);
  }
  async update(id: number, employee: Employee): Promise<any> {
    employee.id = Number(id);
    return await this.employeeRepository.update(id, employee);
  }
}
