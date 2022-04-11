import { Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { WorkspacesService } from './workspaces.service';

@ApiTags('WORKSPACE')
@Controller('api/workspaces')
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}

  @Get()
  getWorkspaces() {
    return;
  }

  @Post()
  createWorkspace() {
    return;
  }

  @Get(':url/members')
  getAllMember() {
    return;
  }

  @Post(':url/members')
  inviteMembers() {
    return;
  }

  @Delete(':url/members/:id')
  kickMember() {
    return;
  }

  @Get(':url/members/:id')
  getMemberInfo() {
    return;
  }
}
