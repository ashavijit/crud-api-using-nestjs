import { Controller, Get } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get('all')
  async findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }
}
