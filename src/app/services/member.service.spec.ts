import { TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { MemberService } from './member.service';

describe('MemberService', () => {
  let service: MemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient],
    });
    service = TestBed.inject(MemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /* it('should return member with id 4', (done) => {
    localStorage.setItem('headerValue', 'Basic am9obi5kb2U6VmVyeVNlY3JldCE=');
    service.getMemberById(4).subscribe((member) => {
      expect(member.memberAddress).toBe('string');
      done();
    });
  });*/
});
