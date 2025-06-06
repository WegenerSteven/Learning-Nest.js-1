import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentsService {
  create(createDepartmentDto: CreateDepartmentDto) {
    return `This action adds a new department: ${JSON.stringify(createDepartmentDto)}`;
  }

  findAll(search?: string) {
    if (search) {
      return `This action returns departments matching: ${search}`;
    }
    return `This action returns all departments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} department`;
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return `This action updates a #${id} department with: ${JSON.stringify(updateDepartmentDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}
