IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [Usuarios] (
    [Id] VARCHAR(80) NOT NULL,
    [FirstName] VARCHAR(80) NOT NULL,
    [LastName] VARCHAR(80) NOT NULL,
    [EmailUser] VARCHAR(80) NOT NULL,
    [PhoneUser] VARCHAR(80) NULL,
    [BirthDayUser] VARCHAR(80) NOT NULL,
    [PasswordUser] VARCHAR(80) NOT NULL,
    CONSTRAINT [PK_Usuarios] PRIMARY KEY ([Id])
);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20211007134759_MigracaoTeste', N'5.0.10');
GO

COMMIT;
GO

