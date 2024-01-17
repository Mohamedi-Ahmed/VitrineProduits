using backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

var builder = WebApplication.CreateBuilder(args);

// Ajoutez cette ligne pour récupérer la configuration Azure Storage
var azureStorageConfig = builder.Configuration.GetSection("AzureStorageConfig").Get<AzureStorageConfig>() ?? throw new InvalidOperationException("Azure storage configuration is missing in appsettings.json");

// Enregistrer azureStorageConfig pour une utilisation dans toute l'application
builder.Services.AddSingleton(azureStorageConfig);

// Add services to the container.
builder.Services.AddControllers();

// Add Swagger services
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add DbContext
builder.Services.AddDbContext<ProductsDatabaseContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "AllowAngularApp",
        policyBuilder =>
        {
            policyBuilder.WithOrigins("https://projetvitrineproduitsam.azurewebsites.net", "http://localhost:4200")
                         .AllowAnyHeader()
                         .AllowAnyMethod();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowAngularApp");

app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.Run();