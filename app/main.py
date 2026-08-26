import os
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse
from app.config import settings
from app.api.router import root_router
from app.core.email_worker import start_email_worker, stop_email_worker


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup actions: Spawn background thread to poll IMAP
    start_email_worker()
    yield
    # Shutdown actions: Clean up threads
    stop_email_worker()


# Initialize the FastAPI app with configuration metadata
app = FastAPI(
    title=settings.APP_NAME,
    description="Internal AI-Powered Administrative Ticket & Email Copilot Backend",
    version="1.0.0",
    debug=settings.DEBUG,
    lifespan=lifespan,
)

# Set up CORS (Cross-Origin Resource Sharing) middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register our root API router under the '/api' prefix
app.include_router(root_router, prefix="/api")

# Serve the frontend UI files from the HTML directory (renamed from files (2))
# Adding html=True serves index.html automatically for directory routes (e.g. /ui/)
html_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "HTML"))
if os.path.exists(html_dir):
    app.mount("/ui", StaticFiles(directory=html_dir, html=True), name="ui")


@app.get("/", summary="API Root")
def read_root():
    """
    Redirects the root URL request directly to the frontend UI dashboard.
    """
    return RedirectResponse(url="/ui/index.html")
