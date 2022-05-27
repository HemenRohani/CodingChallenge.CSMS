import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();
  });

  it('/rate (POST)', () => {
    let dto = {
      "rate": { "energy": 0.3, "time": 2, "transaction": 1 },
      "cdr": {
        "meterStart": 1204307,
        "timestampStart": new Date("2021-04-05T10:04:00Z"),
        "meterStop": 1215230,
        "timestampStop": new Date("2021-04-05T11:27:00Z")
      }
    };

    let result = {
      "overall": 7.04,
      "components": {
        "energy": 3.277, "time": 2.767, "transaction": 1
      }
    };
    return request(app.getHttpServer())
      .post('/rate')
      .send(dto)
      .expect(200)
      .expect(result);
  });
});
