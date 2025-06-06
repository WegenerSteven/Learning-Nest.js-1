import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { Course } from './entities/course.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { Department } from '../departments/entities/department.entity';
import { Student } from '../students/entities/student.entity';
import { CaslModule } from '../casl/casl.module';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([Course, Department, Student]),
    CaslModule,
  ],
  providers: [CoursesService],
  controllers: [CoursesController],
})
export class CoursesModule {}
