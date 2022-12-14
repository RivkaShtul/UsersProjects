USE [db]
GO
/****** Object:  Table [dbo].[PersonDetails]    Script Date: 24/11/2022 09:49:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PersonDetails](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Teams] [nvarchar](50) NOT NULL,
	[JoinedAt] [date] NOT NULL,
	[Avatar] [nchar](100) NOT NULL,
	[Token] [varchar](max) NULL,
	[Email] [nchar](50) NOT NULL,
	[Password] [nchar](10) NOT NULL,
 CONSTRAINT [PK_PersonDetails] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProjectInfo]    Script Date: 24/11/2022 09:49:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProjectInfo](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Score] [int] NOT NULL,
	[DurationInDays] [int] NOT NULL,
	[BugsCount] [int] NOT NULL,
	[MadeDedline] [bit] NOT NULL,
 CONSTRAINT [PK_ProjectInfo] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[PersonDetails] ON 

INSERT [dbo].[PersonDetails] ([Id], [Name], [Teams], [JoinedAt], [Avatar], [Token], [Email], [Password]) VALUES (1, N'Rivka', N'12', CAST(N'2022-01-01' AS Date), N'https://avatarfiles.alphacoders.com/164/thumb-164632.jpg                                            ', N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjkyNDU1MjAsImlzcyI6IlRlc3QuY29tIiwiYXVkIjoiVGVzdC5jb20ifQ.BZD-GEDnmRl2xHfDrfgAOhh6uzLYBE-oG0mAcg0vACw', N'shvirtzr@gmail.com                                ', N'Rs1234    ')
INSERT [dbo].[PersonDetails] ([Id], [Name], [Teams], [JoinedAt], [Avatar], [Token], [Email], [Password]) VALUES (3, N'Lea', N'11', CAST(N'2021-12-12' AS Date), N'https://avatarfiles.alphacoders.com/164/thumb-164632.jpg                                            ', N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjkyNDYxNjYsImlzcyI6IlRlc3QuY29tIiwiYXVkIjoiVGVzdC5jb20ifQ.2dyKLgkM_U85jnRE98GVGGrQtjXir_5mNn6e7YLT9K0', N'lea.shtul@gmail.com                               ', N'Ll1478    ')
INSERT [dbo].[PersonDetails] ([Id], [Name], [Teams], [JoinedAt], [Avatar], [Token], [Email], [Password]) VALUES (4, N'Ester', N'10', CAST(N'2020-03-15' AS Date), N'https://avatarfiles.alphacoders.com/164/thumb-164632.jpg                                            ', N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjkyNDU5NzQsImlzcyI6IlRlc3QuY29tIiwiYXVkIjoiVGVzdC5jb20ifQ.e-qv7N_pqZOTSC-gsHPWGnRwiXda2F4qAjUOWgYDiCc', N'es@gmail.com                                      ', N'Ee1111    ')
SET IDENTITY_INSERT [dbo].[PersonDetails] OFF
GO
SET IDENTITY_INSERT [dbo].[ProjectInfo] ON 

INSERT [dbo].[ProjectInfo] ([Id], [UserId], [Name], [Score], [DurationInDays], [BugsCount], [MadeDedline]) VALUES (1, 1, N'Backend Project', 88, 35, 74, 0)
INSERT [dbo].[ProjectInfo] ([Id], [UserId], [Name], [Score], [DurationInDays], [BugsCount], [MadeDedline]) VALUES (2, 1, N'Design Project', 68, 55, 52, 0)
INSERT [dbo].[ProjectInfo] ([Id], [UserId], [Name], [Score], [DurationInDays], [BugsCount], [MadeDedline]) VALUES (3, 1, N'Data Base', 90, 36, 34, 1)
INSERT [dbo].[ProjectInfo] ([Id], [UserId], [Name], [Score], [DurationInDays], [BugsCount], [MadeDedline]) VALUES (4, 1, N'Frontend Project', 99, 51, 32, 1)
INSERT [dbo].[ProjectInfo] ([Id], [UserId], [Name], [Score], [DurationInDays], [BugsCount], [MadeDedline]) VALUES (5, 3, N'React', 100, 7, 0, 0)
INSERT [dbo].[ProjectInfo] ([Id], [UserId], [Name], [Score], [DurationInDays], [BugsCount], [MadeDedline]) VALUES (6, 3, N'dot net core', 98, 3, 2, 0)
INSERT [dbo].[ProjectInfo] ([Id], [UserId], [Name], [Score], [DurationInDays], [BugsCount], [MadeDedline]) VALUES (7, 3, N'SQL', 62, 1, 0, 0)
INSERT [dbo].[ProjectInfo] ([Id], [UserId], [Name], [Score], [DurationInDays], [BugsCount], [MadeDedline]) VALUES (8, 4, N'C++', 50, 15, 14, 0)
INSERT [dbo].[ProjectInfo] ([Id], [UserId], [Name], [Score], [DurationInDays], [BugsCount], [MadeDedline]) VALUES (9, 4, N'JS', 95, 8, 0, 0)
INSERT [dbo].[ProjectInfo] ([Id], [UserId], [Name], [Score], [DurationInDays], [BugsCount], [MadeDedline]) VALUES (10, 4, N'Java', 68, 5, 5, 0)
INSERT [dbo].[ProjectInfo] ([Id], [UserId], [Name], [Score], [DurationInDays], [BugsCount], [MadeDedline]) VALUES (11, 4, N'mongoDB', 100, 2, 2, 1)
INSERT [dbo].[ProjectInfo] ([Id], [UserId], [Name], [Score], [DurationInDays], [BugsCount], [MadeDedline]) VALUES (12, 4, N'nodeJS', 100, 3, 0, 1)

SET IDENTITY_INSERT [dbo].[ProjectInfo] OFF
GO
