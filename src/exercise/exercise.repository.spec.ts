import { Logger } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { MongoService } from '../shared/mongodb/mongodb.provider';
import { ExerciseEntity } from '../types/entities/exercise.entity';
import { ExerciseRepository } from './exercise.repository';

describe('Incident Repository', () => {

  const getBasemapEntity: () => Partial<ExerciseEntity> = () => ({
    _id: ObjectId.createFromHexString('5b681f5b61020f2d8ad4768d'),
    id: 'id1',
    label: 'Some Basemap'
  });

  let service: ExerciseRepository;
  const loggerMock: Partial<Logger> = {
    debug: jest.fn(),
    error: jest.fn(),
  };
  const collectionMock = {
    find: jest.fn(),
    toArray: jest.fn()
  };
  const mongoServiceMock: Partial<MongoService> = {
    getCollection: jest.fn().mockReturnValue(collectionMock)
  };

  beforeEach(() => {
    (mongoServiceMock.getCollection as jest.Mock).mockReturnValue(collectionMock);
    (collectionMock.find as jest.Mock).mockReturnValue(collectionMock);
    service = new ExerciseRepository(
      loggerMock as Logger,
      mongoServiceMock as MongoService
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should run getAll as expected', async () => {
    const mockBasemapRecords = [
      getBasemapEntity(),
      getBasemapEntity()
    ];

    (collectionMock.toArray as jest.Mock).mockResolvedValueOnce(mockBasemapRecords);
    const result = await service.getAll();

    expect(collectionMock.find).toBeCalledTimes(1);
    expect(collectionMock.toArray).toBeCalledTimes(1);
    expect(collectionMock.find).toBeCalledWith({});
    expect(result).toEqual(mockBasemapRecords);
  });

  it('should raised error from getAll', async () => {
    const mockError = new Error('error from db');
    (collectionMock.toArray as jest.Mock).mockRejectedValue(mockError);
    await expect(service.getAll()).rejects.toThrow(mockError);
    expect(collectionMock.find).toBeCalledTimes(1);
    expect(collectionMock.toArray).toBeCalledTimes(1);
    expect(collectionMock.find).toBeCalledWith({});
  });

});
