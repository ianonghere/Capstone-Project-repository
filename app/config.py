from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """
    Application configuration loaded from environment variables and/or a .env file.
    Uses Pydantic-Settings to automatically parse and type-cast settings.
    """

    APP_NAME: str = "ITE Ticket & Email Copilot"
    APP_ENV: str = "development"
    DEBUG: bool = True
    HOST: str = "127.0.0.1"
    PORT: int = 8000

    # Email Settings
    EMAIL_IMAP_SERVER: str = "outlook.office365.com"
    EMAIL_SMTP_SERVER: str = "smtp.office365.com"
    EMAIL_IMAP_PORT: int = 993
    EMAIL_SMTP_PORT: int = 587
    EMAIL_ADDRESS: str = ""
    EMAIL_PASSWORD: str = ""
    EMAIL_CHECK_INTERVAL: int = 30

    # Configuration metadata for pydantic-settings
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",  # Ignore other random environment variables not specified here
    )


# Create a singleton settings object to be shared across the application
settings = Settings()
