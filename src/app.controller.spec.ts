import {Test, TestingModule} from '@nestjs/testing';
import {AppController} from './app.controller';

describe('AppController', () => {
    let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

      appController = app.get<AppController>(AppController);
  });

  describe('getHello', () => {
      it('should return environment variables', () => {
          const mockEnv = {TEST: 'test-value'};
        const mockEnv2 = {TEST: 'test-valuex'};
          process.env = mockEnv;
          expect(appController.getHello()).toEqual(mockEnv2);
      });
  });
});
