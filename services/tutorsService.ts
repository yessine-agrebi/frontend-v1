import Api from '@/API/Api';

const headers = {
  'Content-Type': 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inllc3NpbmUzQGdtYWlsLmNvbSIsInN1YiI6NCwiaWF0IjoxNzA5MTk0NTM0LCJleHAiOjE3MDk3OTkzMzR9.5QFIU2GC_emXZVfsA44vr3xDoRR0c4FAlcT_SJ_YejM',
};
export const fetchTutors = async () => {
  const response = await Api.get('/tutors', { headers: headers });
  const data = await response.data;
  console.log(data);
  return data;
};
