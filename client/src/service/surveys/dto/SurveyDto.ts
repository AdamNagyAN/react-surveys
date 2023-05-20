import { UserDto } from '../../auth/dto/LoginResponseDto';

interface SurveyDto {
  id: number;
  name: string;
  content: string;
  hash: string;
  createdAt: number;
  userId: number;
  user: UserDto;
}

export default SurveyDto;
