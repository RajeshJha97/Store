using Microsoft.EntityFrameworkCore;
using Store.Server.Application.Services;
using Store.Server.Application.Services.IService;
using Store.Server.Infrastructure;
using Store.Server.Infrastructure.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDbContext>(options => {

    options.UseSqlServer(builder.Configuration.GetConnectionString("Store_API_Conn"));
});
builder.Services.AddCors();
builder.Services.AddScoped<IProductRepository, ProductRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
var client_url = builder.Configuration.GetValue<string>("Client_Url");
app.UseHttpsRedirection();
app.UseCors(opt => {

    opt.AllowAnyHeader().AllowAnyMethod().WithOrigins(client_url);
});
app.UseAuthorization();

app.MapControllers();

//So services have scope of all services which we defined and declared above and down we want to access the db which is scoped ApplicationDbContext Service
var scope =app.Services.CreateScope(); 
var context=scope.ServiceProvider.GetService<ApplicationDbContext>();
var logger = scope.ServiceProvider.GetService<ILogger<Program>>();

try
{
    context.Database.Migrate();
    SeedProductData.Initialize(context);
    
}
catch (Exception ex)
{
    logger.LogError(ex.Message,"Exception during db migration.");
}

app.Run();
